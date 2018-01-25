function fnInit(){}

fnInit.prototype.model = function() {
    this.name = "";
    this.phone = "";
    this.addr = "";
    this.codeList = [];

}

fnInit.prototype.reg = function(m) {
    var item = {
        name : m.name,
        phone : m.phone,
        addr : m.addr,
        codeList: m.codeList
    }
    localStorage.setItem("item", JSON.stringify(item));
}

fnInit.prototype.list = function() {
    return JSON.parse(localStorage.getItem("item"));
}

fnInit.prototype.table = function() {

    var listItem = [];
    for(var i=0; i<10; i++) {
        listItem.push(i+"");
    }

    //listItem = 1;

    item = {
        name : "1111",
        phone: "123-123-123",
        addr: "addr",
        codeList: listItem
    }
    this.reg(item);
    var listResult = this.list();
    console.log(listResult);
}

