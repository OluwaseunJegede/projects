import React from 'react'
import './Story.css'
import hello from '../../react-images/3.jpeg'

function Story() {
  return (
    <div className='about component-space' id='About'>
        <div className='container'>
            <div className="row">
                <div className="col_2">
                    <img src={hello} alt="" classname="about-img" />
                </div>
                <div className="col_2">
                    <h1 className='about__heading'>Our story</h1>
                    <div className="about-meta">
                        <p className="about-text p__color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nisl non elit dignissim 
                        rhoncus. Curabitur est nisl, pellentesque vitae velit at, luctus ornare diam. Nam ut libero ut
                         nunc venenatis commodo sit amet a ante. Duis at nibh sit amet magna pretium faucibus vel id diam.
                        </p>
                        <p className="about-text p__color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nisl non elit dignissim 
                        rhoncus. Curabitur est nisl, pellentesque vitae velit at, luctus ornare diam. Nam ut libero ut
                         nunc venenatis commodo sit amet a ante. Duis at nibh sit amet magna pretium faucibus vel id diam.
                          
                            </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Story