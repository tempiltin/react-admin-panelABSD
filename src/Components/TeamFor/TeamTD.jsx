import React from 'react'
import { Link } from 'react-router-dom'
const img = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
const TeamTD = () => {

    const arr = [
        {
            id: 1,
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            posit: "Web developer",
            tell: "99-999-99-99"
        },
        {
            id: 12,
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            posit: "Web developer",
            tell: "99-999-99-99"
        },
        {
            id: 112,
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            posit: "Web developer",
            tell: "99-999-99-99"
        },
        {
            id: 11,
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            posit: "Web developer",
            tell: "99-999-99-99"
        },
        {
            id: 122,
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            posit: "Web developer",
            tell: "99-999-99-99"
        },
        {
            id: 1456,
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            posit: "Web developer",
            tell: "99-999-99-99"
        },
        {
            id: 14564,
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            posit: "Web developer",
            tell: "99-999-99-99"
        },
    ]
    return (
        <>

            {
                arr.map(({ id, name, email, posit, tell }) => {
                    return (
                        <tr key={id}>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div>
                                        <img src={img} className="avatar avatar-sm me-3 border-radius-lg" alt="" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">
                                            <Link to="/team/team-grooup-user-add">
                                                {name}
                                            </Link>
                                        </h6>
                                        <p className="text-xs text-secondary mb-0">
                                            <a href={`mailto:`+ email}>{email}</a>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{posit}</p>
                                
                            </td>
                            <td className="align-middle text-center text-sm">
                                <a href={`tel:` + tell} className="badge badge-sm bg-gradient-success">+998 (99) 333 44 44 </a>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">
                                    <a href={`mailto:`+ email}>{email}</a>
                                </span>
                            </td>

                        </tr>
                    )
                })
            }

        </>
    )
}

export default TeamTD