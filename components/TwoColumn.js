const TwoColumn = props => (

    <div className="container">

        {props.top &&
            <div className="row">
                <div className="col-5 col-left">
                    
                </div>
                <div className="col-7 col-top">
                    {props.top}
                </div>
            </div>
        }
        <div className="row">

            <div className="col-5 col-left">
                {props.left}
            </div>
            <div className="col-7 col-right">
                {props.right}
            </div>

        </div>
    </div>
);


export default TwoColumn;