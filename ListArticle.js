import React, { useState } from "react";
export default function ListArticle(){
const [id,setId]=useState(0)
const [designation,setDesignation]=useState("")
const [prix,setPrix]=useState(0)
const [articles,setArticles]=useState([])

function handlerAddArticle(event){
    setArticles([...articles,{ id: id, designation: designation, prix:prix }]);
}
function handlerOnChangeId(event){
    setId(event.target.value)

}
function handlerOnChangeDesignation(event){
    setDesignation(event.target.value)

}
function handlerOnChangePrix(event){
    setPrix(event.target.value)

}

return(
<div className="container">
    
<div className="list">
<h2 className="title">Ajout d'un Article</h2>
<div>
<label>Id: </label>
<input type="number" onChange={handlerOnChangeId} value={id} autoFocus required/>
</div>
<div>
<label>Designation: </label>
<input type="text" onChange={handlerOnChangeDesignation} value={designation}/>
</div> 
<div>
<label>Prix: </label>
<input type="number" onChange={handlerOnChangePrix} value={prix}/>
</div>
<br></br>
<div>
<input type="button" value="Ajouter" onClick={handlerAddArticle} />
</div>
<div>
<h3>liste Articles</h3>
<ul>
    {articles.map(
        (article)=>
        <li key={article.id}>
            id: {article.id} designation: {article.designation} prix: {article.prix}
        </li>
        
    )}
</ul>
</div>
</div>
</div>
)
}
