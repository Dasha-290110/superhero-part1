var canvas=new fabric.Canvas("myCanvas");

pencil_x=10;
pencil_y=10;


body_parts_width=30;
body_parts_height=30;

var pencil_object="";
var body_parts_object="";


function pencil_update(){
    fabric.Image.fromURL("pencil.png",function(Img)
{
pencil_object=Img;
pencil_object.scaleToWidth(150);
pencil_object.scaleToHeight(150);
pencil_object.set({top:pencil_y,left:pencil_x});

canvas.add(pencil_object);

});
}


function body_parts(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
    body_parts_object=Img;
    body_parts_object.scaleToWidth(body_parts_width);
    body_parts_object.scaleToHeight(body_parts_height);
    body_parts_object.set({
        top:pencil_y,
        left:pencil_x
    });
    canvas.add(body_parts_object);
    
    });
}

