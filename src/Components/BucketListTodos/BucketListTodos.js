import React from "react";
import PendingTodos from "../PendingTodos/PendingTodos";
import CompletedTodos from "../CompletedTodos/CompletedTodos";
import ViewTodo from "../ViewTodo/ViewTodo";

export default class BucketListTodos extends React.Component {
  render() {
    return (
      <>
        <div className="main-todos">
          <PendingTodos />
          <CompletedTodos />
          <ViewTodo {...this.props} />
        </div>
      </>
    );
  }
}

//  <div className="pending-todos">
//           <h3>Pending Todos</h3>
//           <div className="completed-view">
//             <button>View Completed Todos</button>
//           </div>
//           <ul>
//             {folders.map((f) => (
//               <>
//                 <h4>Category: {f.category}</h4>

//                 <p>{f.folder_name}</p>
//               </>
//             ))}
//             <li>
//               <h4>Fitness</h4>
//               <p>Task Name</p>

//               <p>Complete By: X/X/2021</p>
//             </li>
//             <li>
//               <h4>Productivity</h4>
//               <p>Task Name</p>

//               <p>Complete By: X/X/2021</p>
//             </li>
//             <li>
//               <h4>Finance</h4>
//               <p>Task Name</p>

//               <p>Complete By: X/X/2021</p>
//             </li>
//           </ul>
//         </div>
//         <div className="completed-todos">
//           <h3>Completed Todos</h3>
//           <ul>
//             <li>
//               <h4>Fitness</h4>
//               <p>Task Name</p>

//               <p>Completed by: X/X/2021</p>
//             </li>
//             <li>
//               <h4>Productivity</h4>
//               <p>Task Name</p>

//               <p>Completed by: X/X/2021</p>
//             </li>
//             <li>
//               <h4>Finance</h4>
//               <p>Task Name</p>

//               <p>Completed by: X/X/2021</p>
//             </li>

//             <li>
//               <h4>Fitness</h4>
//               <p>Task Name</p>

//               <p>Completed by: X/X/2021</p>
//             </li>
//             <li>
//               <h4>Productivity</h4>
//               <p>Task Name</p>

//               <p>Completed by: X/X/2021</p>
//             </li>
//             <li>
//               <h4>Finance</h4>
//               <p>Task Name</p>

//               <p>Completed by: X/X/2021</p>
//             </li>
//           </ul>
//         </div>
//         <div className="view-todo">
//           <h3>View Todo</h3>
//           <div className="view-todo-task">
//             <h4>Todo Name</h4>
//             <p>Description of task</p>
//             <p>Complete by:</p>
//           </div>
//         </div>
//       </div> */
