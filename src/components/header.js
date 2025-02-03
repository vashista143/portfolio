export default function Header(){
    return(
        <div className='head'>
          <table className="headtable">
            <tr>
              <td>
                <p className='name'><a href="/">• VASHISTA</a></p>
              </td>
              <td>
                <p className='worktext'><a href='/work'>Work</a></p>
              </td>
              <td>
                <p className='infotext'><a href='/info'>Info</a></p>
              </td>
            </tr>
          </table>
        {/* <div className='name'>
           <p className="vashista"><a href="/">• VASHISTA</a></p>
         </div>
         <div className='workinfo'>
           <p className='worktext'><a href='/work'>Work</a></p>
           <p className='infotext'><a href='/info'>Info</a></p>
         </div> */}
     </div>
    )
}