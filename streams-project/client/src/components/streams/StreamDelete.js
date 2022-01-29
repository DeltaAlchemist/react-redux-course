import React from "react";
import { Modal } from "../Modal";
import history from "../../redux/history";

const StreamDelete = () => {

    const actions = (
        // we could use <> or <React.Fragment>
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return(
        <div>
            StreamDelete
            <Modal 
                title="Delete stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                onDismiss={() => history.push("/")}
            />
        </div>
    );
}

export default StreamDelete