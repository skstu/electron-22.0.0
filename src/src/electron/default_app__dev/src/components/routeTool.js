import React,{Component} from "react";
import routes from "../route/route";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

class RouteTool extends Component {


    render(){

        return(
            <BrowserRouter>
            {/* <h1 onClick={()=>this.openRender()}>渲染新页面</h1> */}
            <div className="route">
                <Link to = '/'>HomePage</Link>
                <Link to = '/testpage'>TestPage</Link>
                {/* <Link to = '/render'>render</Link> */}
                <Routes>
                    {
                        routes.map((item, key) => {
                            return (
                                <Route key = {key} path ={item.path} element ={<item.component/>}></Route>
                            )
                        })
                    }
                </Routes>
            </div>
          </BrowserRouter>
        )
    }


}
export default RouteTool;
