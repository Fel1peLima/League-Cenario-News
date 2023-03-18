var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    titulo: String,
    imagem: String,
    categoria: String,
    conteudo: String,
    slug: String,
    autor: String,
    views: Number,
    video: String,
    conteudo2: String,
    imagem2: String, 
    conteudo3: String,
    imagem3: String,
    conteudo4: String, 
    imagem4: String,
    conteudo5: String, 
    imagem5: String,
    conteudo6: String, 
    imagem6: String,
    conteudo7: String, 
    imagem7: String,
    conteudo8: String,
    conteudoyuumi1: String,
    conteudoyuumititulo: String,
    conteudoyuumipassiva: String,
    imagemyuumipassiva: String,
    conteudoyuumiq: String,
    imagemyuumiq: String,
    conteudoyuumiw: String,
    imagemyuumiw: String,
    conteudoyuumie: String,
    imagemyuumie: String,
    conteudoyuumir: String,
    imagemyuumir: String,
    conteudoyuumi2: String,
    imagemskarner: String,
    conteudoskarner: String,
},{collection: 'Posts'})

var Posts = mongoose.model("Posts",postSchema);

module.exports = Posts;