import React from "react";

function TodoLists(props) {
  let today = new Date();
  const locale = "en";
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  const day = today.toLocaleDateString(locale, { weekday: "long" });

  return (
    <div className="todo">
      <div className="left" style={{wordWrap:"break-word"}}>
        {/* <input type="checkbox" name="" id=""  /> */}
              <p>{props.values} </p>  &nbsp;&nbsp;&nbsp;&nbsp;
              <p > {day} {time}</p>
      </div>
      <div className="right">
        {/* <i className="fas fa-times"></i> */}
        <i
          className="fa fa-minus-square"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
      </div>
    </div>
  );
}

export default TodoLists;
