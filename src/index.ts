import express from 'express'
import boolParser from 'express-query-boolean'

import AnimalAvatar, { AvatarOptions } from './animal-avatar-generator/index'

const app = express()

app.use(boolParser())
app.set('view engine', 'html')

const getSVG = (options: AvatarOptions) => {
	return AnimalAvatar(options)
}

app.get('/', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'image/svg+xml',
	}).end(getSVG(req.query))
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'))

console.log(`Express server listening on port ${app.get('port')}`)
