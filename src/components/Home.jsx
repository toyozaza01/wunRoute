import wun from '../images/01.jpg';
export default function Home() {
    return(
      <div>
         <div className="card" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 className='resume' style={{ color: 'black', textAlign: 'center' }}>Resume</h1>
        <hr />
        <div className='img2' style={{ textAlign: 'center' }}>
            <img src={wun} alt="01" width={'50%'} style={{ borderRadius: '10px' }} />
        </div>
        <hr />
    </div>
    <div className="card" style={{backgroundColor: '#333', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
            <div className='re'>
                <h1 style={{textAlign:'center',fontSize:'50px', color: '#fff'}}>My Profile</h1>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}> </div>
            <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff'}}>Name : Mr.Piyaphong Yajanto </h1>
            <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff'}}>Nickname : wun </h1>
            <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff'}}>Age : 21 </h1>
            <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff'}}>Birthday : 20/08/2003 </h1>
            <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff'}}>Hobbies : Play game </h1>
            <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff'}}>Favorite color : Black </h1>
            <h1 style={{textAlign:'center',fontSize:'20px',color:'#fff'}}>Favorite food : Hamberger </h1>
            <hr style={{borderColor: '#fff'}} />
            <p style={{color: '#fff'}}>Web Technology</p>
        </div>
      </div>
    )
  }
  