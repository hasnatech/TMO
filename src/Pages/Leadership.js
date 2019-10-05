import React, { Component } from 'react';
import { Link } from "react-router-dom";



var items = [];

class LeaderShip extends Component {
constructor(props) {
super(props);
this.state = {
data: [
{
name: "Leadership 1",
image: "",
link: "id"
},
{
name: "Leadership 2",
image: "",
link: "id"
},
{
name: "Leadership 3",
image: "",
link: "id"
}
],
item: ""
}
}
componentDidMount() {
//const { topic_no } = this.props.match.params
//console.log(topic_no, this.state.data[Number(topic_no)].name)
/*this.setState({
item:
<Link to="/leadership/1">
<p>{this.state.data[Number(topic_no)].name}</p>
</Link>
})*/

this.setState({
item1:
<Link to="/digital">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item2:
<Link to="/ibp">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item3:
<Link to="/supply">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item4:
<Link to="/rd">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item6:
<Link to="/opmodel">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item7:
<Link to="/commercial">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item8:
<Link to="/cssp">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item9:
<Link to="/cbs">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item10:
<Link to="/manufacturing">
<p>{this.state.data[0].name}</p>
</Link>
})
this.setState({
item11:
<Link to="/additional">
<p>{this.state.data[0].name}</p>
</Link>
})



}

render() {
return (
<div>
    <div className="leader_banner">
    </div>
    <h2 id="des">Transformational Leadership</h2>
    <h2>About Transformational Leadership</h2>
    <p>Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel
        eum iure rep rehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur
    </p>


    <div className="flex">

        <div className="flex_25">
            <div className="panel execution">
                <Link to="/digital">
                <div className="item">
                    Digital
                </div>
                </Link>
            </div>
        </div>
        <div className="flex_25">
            <div className="panel enabler">
                <Link to="/ibp">
                <div className="item">
                   IBP
                </div>
                </Link>
            </div>
        </div>
        <div className="flex_25">
            <div className="panel execution">
                <Link to="/supply">
                <div className="item">
                    Supply Chain Design & Optimization
                </div>
                </Link>
            </div>
        </div>

        <div className="flex_25">
            <div className="panel enabler">
                <Link to="/rd">
                <div className="item">
                    R&D/ Innovation
                </div>
                </Link>
            </div>
        </div>
        <div className="flex_25">
            <div className="panel execution">
                <Link to="/opmodel">
                <div className="item">
                    Op Model/ Culture
                </div>
                </Link>
            </div>
        </div>
    </div>
    <div className="flex">
        <div className="flex_25">
            <div className="panel enabler">
                <Link to="/commercial">
                <div className="item">
                    Commercial Excellence
                </div>
                </Link>
            </div>
        </div>
        <div className="flex_25">
            <div className="panel execution">
                <Link to="/cbs">
                <div className="item">
                Sourcing and Procurement (CSSP)
                </div>
                </Link>
            </div>
        </div>
        <div className="flex_25">
            <div className="panel enabler">
                <Link to="/cbs">
                <div className="item">
                    CBS

                </div>
                </Link>
            </div>
        </div>
        <div className="flex_25">
            <div className="panel execution">
                <Link to="/manufacturing">
                <div className="item">

                    Manufacturing Excellence/ Capital Excellence

                </div>
                </Link>
            </div>
        </div>

        <div className="flex_25">
            <div className="panel enabler">
                <Link to="/additional">
                <div className="item">
                    Additional topics

                </div>
                </Link>
            </div>
        </div>



    </div>





</div>
);
}
}
export default LeaderShip;