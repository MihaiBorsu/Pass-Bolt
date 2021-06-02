import Link from "next/link"
import SuperpassCheckpoint from "./SuperpassCheckpoint"

export default ({ password }) => { 

    const { passwordHash, passwordUserName, passwordUrl } = password
    console.log("inside password:    ", passwordHash)
    localStorage.setItem("passwordHash",passwordHash)
    return (
        <div className="password">

        <div className="info">

            <div className="top">
                <Link href={`${passwordUrl}`}>
                    <a className="username">
                    Link: {passwordUrl}
                    </a>
                </Link>
            </div>

            <div className="top">
                <p>
                    Username for your password: {passwordUserName}
                </p>
            </div>

            <div>
                <SuperpassCheckpoint />
                    
            </div>

        </div>

        <style jsx>{`
            .password {
            padding: 20px;
            border-bottom: 1px solid rgba(151,151,151,0.17);
            }
            .password:last-child {
            border-bottom: none;
            }
            .info {
            display: inline-block;
            vertical-align: top;
            margin-left: 20px;
            width: calc(100% - 62px);
            }
            .top {
            display: flex;
            }
            a {
            font-size: 17px;
            color: #5D5D65;
            font-weight: 600;
            flex-grow: 1;
            text-decoration: none;
            }
            a:hover {
            text-decoration: underline;
            }
            p {
            font-size: 16px;
            color: #444448;
            line-height: 24px;
            margin-top: 6px;
            }
            h3 {
                padding-bottom: 10px;
            }
            footer {
                text-align: right;
                padding-top: 16px;
            }
            @media (max-width: 400px) {
            .password {
                padding: 14px;
            }
            .password :global(.avatar) {
                width: 34px;
                height: 34px;
            }
            a {
                font-size: 15px;
            }
            p,
            time {
                font-size: 15px;
            }
            }
        `}</style>
        </div>
    )
    
}