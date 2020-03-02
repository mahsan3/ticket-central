import React, {useEffect, useState} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

function TicketForm(props) {

    const [title, setTitle] = useState(props.ticketData.title);
    const [description, setDescription] = useState(props.ticketData.description);
    const [status, setStatus] = useState(props.ticketData.status.id);
    const [assignedTo, setAssignedTo] = useState(props.ticketData.ticket_assigned_to.id);
    const [tags, setTags] = useState(props.ticketData.tags);

    useEffect(() => {

    }, []);

    const onSelect = (selectedList, selectedItem) => {
        console.log(selectedList, selectedItem);
        setTags(selectedList);
    };

    const onRemove = (selectedList, removedItem) => {
        console.log(selectedList, removedItem);
        setTags(selectedList);
    };

    const removeTicket = () => {
        props.deleteTicket();
    };

    const saveTicket = () => {

        props.handleSubmit({
            "title": title,
            "description": description,
            "status": status,
            "assignedTo": assignedTo,
            "tags": tags.map(t => t.id)
        });

    };

    return (
        <form className="" autoComplete="off">

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title"
                        value={title}
                       onChange={e => setTitle(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea className="form-control" id="desc" rows="3"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div className="form-group">
                <label>Status</label>
                <select className="form-control" onChange={e => setStatus(e.target.value)}>
                    <option>Default select</option>
                    {props.status.map(s => {
                        return <option
                                    value={s.id}
                                    selected={s.id === status}
                                    key={s.id}>
                                    {s.name}
                                </option>;
                    })}
                </select>
            </div>

            <div className="form-group">
                <label>Assigned To</label>
                <select className="form-control" onChange={e => setAssignedTo(e.target.value)}>
                    <option>Default select</option>
                    {props.users.map(u => {
                        return <option
                            value={u.id}
                            selected={u.id === assignedTo}
                            key={u.id}>
                            {u.name} ({u.email})
                        </option>;
                    })}
                </select>
            </div>

            <div className="form-group">
                <label>Tags</label>
                <Multiselect
                    options={props.tags} // Options to display in the dropdown
                    selectedValues={tags} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                />
            </div>

            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-danger" onClick={() => removeTicket()}>Delete</button>
                <button type="button" className="btn btn-success" onClick={() => saveTicket()}>Save</button>
            </div>
        </form>
    );
}

export default TicketForm;