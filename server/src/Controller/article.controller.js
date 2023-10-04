const fs = require("fs")


const articleFilePath = __dirname+"/../Data/article.json"
function getAll(req,res) {
    const JSONdata = fs.readFileSync(articleFilePath).toString()
    const data = JSON.parse(JSONdata)
    res.status(200).send(data)
}

function add(req,res) {
    const article = {...req.body}

    if (!article.title || !article.content) {
        res.status(501).send('malformed request')
        return
    }

    const saved = JSON.parse(fs.readFileSync(articleFilePath).toString())
    article.id = saved.length + 1
    saved.push(article)
    const stringData = JSON.stringify(saved)
    fs.writeFile(articleFilePath, stringData, 'utf-8', function(err) {
        if(err) {
            res.status(500).send(`error : ${err.message}`)
            return
        }
        res.status(201).send('created')
    })
}

function update(req, res) {
    const articleID = parseInt(req.params.id)
    const article = req.body
    const rawData = JSON.parse(fs.readFileSync(articleFilePath).toString())
    const updatedData = rawData.map((art) => {
        if(art.id === articleID) {
            art.title = article.title
            art.content = article.content
        }
        return art
    })
    const updatedDataJson = JSON.stringify(updatedData)
    fs.writeFile(articleFilePath, updatedDataJson, 'utf-8', function(err) {
        if(err) {
            res.status(500).send('something went wrong')
            return
        }
        res.status(201).send('Updated')
    })
}

function deleteArticle(req,res) {
    const {id} = req.params
    const data = JSON.parse(fs.readFileSync(articleFilePath).toString())
    const filteredData = data.filter((article) => article.id !== parseInt(id))
    fs.writeFile(articleFilePath, JSON.stringify(filteredData), 'utf-8', function(err) {
        if(err) {
            res.status(500).send('something went wrong')
            return
        }
        res.status(200).send('Deleted')
    })
}

module.exports = {
    getAll,
    add,
    update,
    delete: deleteArticle
}
