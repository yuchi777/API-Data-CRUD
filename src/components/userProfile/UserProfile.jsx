import "./userProfile.scss";
import {useMemo} from 'react';


//從Navbar打開UserProfile彈出視窗並帶入props的user資料

const UserProfile = (props) => {

    const logout = () =>{
        global.auth.logout();
        props.close('logout');

    }

    const user = useMemo(() => {
        //解碼token獲得user資料 或回傳空{}
        return global.auth.getUser() || {}
      }, [])


  return (
    <div className="user-profle">
            <p className="title has-text-centered">Profile</p>

            <fieldset disabled>

                <div className="field">
                    <div className="control">
                        <label className="label label-flex">Name</label>
                        <input className="input" type="text" defaultValue={user.name} />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label label-flex">Account</label>
                        <input className="input" type="text" defaultValue={user.account} />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label label-flex">Type</label>
                        <input className="input" type="text" defaultValue={user.type === 1 ? 'Manger' : 'General User'} />
                    </div>
                </div>

            </fieldset>

            <br />
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button className="button is-info" type="button" onClick={logout}>Logout</button>
                </div>
                <div className="control">
                    <button className="button" type="button" onClick={()=>{props.close();}}>Cancel</button>
                </div>
            </div>
        </div>
  )
}

export default UserProfile