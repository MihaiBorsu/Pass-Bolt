import Password from './Password'

export default ({ passwords = [] }) => {    
    console.log("inside list passwords: ", passwords)
    return (
        <ul className="passList">
        {!passwords.length && <p>You haven't added any passwords yet.</p>}

        {passwords.map(password => <Password password={password} />)}
      

        <style jsx>{`
        .passList {
            background-color: white;
            border: 1px solid rgba(0,0,0,0.11);
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);
            border-radius: 3px;
            max-width: 560px;
            margin: 20px auto;
        }
        p {
            padding: 20px;
            text-align: center;
        }
        `}</style>
    </ul>
    );
}