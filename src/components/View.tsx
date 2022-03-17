import React, { Suspense } from 'react'
import router from '../router'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from 'react-router-dom'

const View = () => {
    console.log(router)
    return (

        <Router>
            <Routes>
                {
                    router.map(r => {
                        return (
                            <Route path={r.path} key={r.key} element={
                                < Suspense fallback={< div > Loading...</div >}>
                                    {r.component}
                                </Suspense>

                            } />
                        )

                    })
                }
            </Routes>
        </Router >

    )
}

export default View
