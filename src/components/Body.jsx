import React from 'react';
import "./Body.css";
import DoneIcon from '@material-ui/icons/Done';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from "axios";
import moment from "moment";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function Body() {

const [transaction, setTransaction] = React.useState([]);
  console.log(transaction);
React.useEffect(() => {

    axios.get(
      "https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&&recipientId=2"
    )
      .then((response) => {
        
          setTransaction(response.data.transactions);

        
      })
      .catch((error) => {
        console.log("Error");
      });
        // GET request using axios inside useEffect React hook
        // axios.get('https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&&recipientId=2')
        //     .then(response => setTransaction(response.data.transactions.map((getTransactions => {console.log(getTransactions);}))));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);





  // const date = new Date().getDate();
  // const monthNumber = (new Date().getMonth()+1);
  // let monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // let monthName = monthNames[monthNumber];
  // const year = new Date().getFullYear();

//   // function formatAMPM(date) {
//   // var hours = date.getHours();
//   // var minutes = date.getMinutes();
//   // var ampm = hours >= 12 ? 'pm' : 'am';
//   // hours = hours % 12;
//   // hours = hours ? hours : 12; // the hour '0' should be '12'
//   // minutes = minutes < 10 ? '0'+minutes : minutes;
//   // var strTime = hours + ':' + minutes + ' ' + ampm;
//   // return strTime;
// }




    return (
      <div >
        {
          transaction.map((getTrans) => {
            return(
              <div>
               <p className="date">{moment(getTrans.startDate).format("DD MMM YYYY")} </p>
              <div className={` ${getTrans.direction === 1 && 'right'}`}>
             
              <br />
               <div className="outer">
                  <div className="inner">
                    <div className="pay">
                     <h1>Rs {getTrans.amount}</h1>
                     <p>Transaction ID</p>
                     <p>{getTrans.id}</p>
                     {getTrans.direction === 1 ? 
                      (getTrans.type===1 ?(getTrans.status===2 ? "" : "") : "") :""
                     }
                     {getTrans.direction === 1 ? 
                      (getTrans.type===2 ?(getTrans.status===1 ? <button>cancel</button> : "") : "") :""
                     }
                     {getTrans.direction === 2 ? 
                      (getTrans.type===1 ?(getTrans.status===2 ? "" : "") : "") :""
                     }
                     {getTrans.direction === 2 ? 
                      (getTrans.type===2 ?(getTrans.status===1 ? <div><button>pay</button> <button>cancel</button></div> : "") : "") :""
                     }

                   
                   
                    </div>
              
                    <div className="confirm">
                      <div >
                        
                        {getTrans.status === 1 ? (
                          <div className="c1">
                          <AccessTimeIcon />
                            <p>Pending</p>
                          </div>
                         ) : "" }
                         {getTrans.status === 2 ? (
                          <div className="c1">
                          <DoneIcon />
                            <p>You Paid</p>
                          </div>
                         ) : "" }
                         {getTrans.status === 3 ? (
                          <div className="c1">
                          <DeleteOutlineIcon />
                            <p>expired</p>
                          </div>
                         ) : "" }
                         {getTrans.status === 4 ? (
                          <div className="c1">
                          <ThumbDownIcon />
                            <p>Reject</p>
                          </div>
                         ) : "" }
                         {getTrans.status === 5 ? (
                          <div className="c1">
                          <ClearIcon />
                            <p>Cancel</p>
                          </div>
                         ) : "" }
                    
                        
                      </div>
                      <div className="c2">
                        <NavigateNextIcon/>
                      </div>                             
                    </div> 
                 </div>
                 <p className="dateTime"> {moment(getTrans.startDate).format("DD MMM YYYY, HH:mm")} </p>
               </div>
              </div>
              </div>
              );
          })
        }
      </div>
    )
}

export default Body;


