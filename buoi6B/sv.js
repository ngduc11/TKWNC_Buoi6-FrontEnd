lst = [];
curItem = null;
$(function(){
  getStudens();
});

function getStudens(){
  fetch("http://localhost:3000/students")
  .then(res=>{
    return res.json();
  })
  .then(data =>{
    lst = [];
    data.forEach((sv, i) => {
      sv.STT = i + 1;
      lst.push(sv);
    });
    if (lst.length>0)
    {
      $("#tbodySV").html("");
      $("#svTemplate").tmpl(lst).appendTo("#tbodySV");
    }
    else{
      str = "<caption>No data found</caption>";
      $("#tbodySV").html(str);
    }
  })
  .catch(err=>{
    str = "<caption>Error.....</caption>";
    $("#tbodySV").html(str);
  });
}