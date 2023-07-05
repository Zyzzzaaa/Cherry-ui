/**
 * title: 颜色
 * description: 我们提出了6种颜色的`Alert`，分别是:'primary' 、`success`、`warning`、`danger`。
 */
 import React from "react";
 import {Divider} from "cherry-ui";
 
 export default ()=>{
     return (
         <div>
             <Divider></Divider>
             <Divider style='success'></Divider>
             <Divider style='info'></Divider>
             <Divider style='warning'></Divider>
             <Divider style='danger'></Divider>
             <Divider style='link'></Divider>
         </div>
     )
 }