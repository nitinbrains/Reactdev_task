import React, { Component,Fragment } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
 class Services extends Component {
     state={
         services:[
             {icon:<FaCocktail/>,
              title:"Free cocktales",
              info:"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
              },
              {icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
              },
              {icon:<FaBeer/>,
                title:"Free Beer",
                info:"Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
              }
         ]
     }
    render() {
        const{services}=this.state;
        return (
            <Fragment>
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                 {services.map((v,i)=>
                 <article key={i} className="service">
                 <span>{v.icon}</span>
                 <h6>{v.title}</h6>
                 <p>{v.info}</p>
                 </article>
                 )}
                </div>
            </section>
            </Fragment>
        )
    }
}

export default Services
