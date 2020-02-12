const express = require("express"),
      app = express(),
      router  = express.Router(),
      data = require('./resources/data.json'),
      issues = data['issuesData']['issues']

app.set("view engine","ejs");
app.use(express.static(__dirname +"/resources"));

class story {
    constructor({id, key, typeName, summary}) {
        this.id = id
        this.key = key
        this.typeName = typeName
        this.summary = summary
    }
}

class subTask {
    constructor({id, key, typeName, summary, parentId, parentKey}) {
        this.id = id
        this.key = key
        this.typeName = typeName
        this.summary = summary
        this.parentId = parentId
        this.parentKey = parentKey
    }
 }

router.get("/",function(req,res){
    let issueMap = new Map();

issues.forEach(issue => {
    if(issue['typeName'] !== 'Sub-task') {
       issueMap.set(issue['id'], [new story(issue)])
    } else {
        issueMap.get(issue['parentId']).push(new subTask(issue))
    }
});
    res.render("landingPage", {issueMap: issueMap});
});

app.use(router)
app.listen(4000, function(){
    console.log("Enjoy your JIRA cards");
});
