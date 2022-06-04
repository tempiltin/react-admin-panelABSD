import React from 'react'
const img = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
const TableForTr = () => {
    return (
        <>
            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <img src={img} className="avatar avatar-sm me-3 border-radius-lg" alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Michael Levi</h6>
                            <p className="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">Programator</p>
                    <p className="text-xs text-secondary mb-0">Developer</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-success">Yes</span>
                </td>
                <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">24/12/08</span>
                </td>

            </tr>

            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <img src={img} className="avatar avatar-sm me-3 border-radius-lg" alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Richard Gran</h6>
                            <p className="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Executive</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-secondary">No</span>
                </td>
                <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">04/10/21</span>
                </td>

            </tr>

            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <img src={img} className="avatar avatar-sm me-3 border-radius-lg" alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Miriam Eric</h6>
                            <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">Programator</p>
                    <p className="text-xs text-secondary mb-0">Developer</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-secondary">No</span>
                </td>
                <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                </td>

            </tr>

            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <img src={img} className="avatar avatar-sm me-3 border-radius-lg" alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Miriam Eric</h6>
                            <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">Programator</p>
                    <p className="text-xs text-secondary mb-0">Developer</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-secondary">No</span>
                </td>
                <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                </td>

            </tr>

            <tr>
                <td>
                    <div className="d-flex px-2 py-1">
                        <div>
                            <img src={img} className="avatar avatar-sm me-3 border-radius-lg" alt="" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Miriam Eric</h6>
                            <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="text-xs font-weight-bold mb-0">Programator</p>
                    <p className="text-xs text-secondary mb-0">Developer</p>
                </td>
                <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-secondary">No</span>
                </td>
                <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                </td>

            </tr>


        </>
    )
}

export default TableForTr