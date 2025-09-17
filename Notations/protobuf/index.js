import * as fs from "node:fs";

const employes = [{
    "title": "Employees",
    "salary": 1000,
    "Residence": false


},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

},{
    "title": "Employees",
    "salary": 1000,
    "Residence": false

}]
fs.writeFileSync("employ.json",JSON.stringify(employes))