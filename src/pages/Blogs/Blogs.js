import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='flex '>
            <div className='bg-cyan-400 border-2 border-neutral-400 mr-2 p-5 rounded'>
    <h3>What is the difference between Javascript and node.js ?</h3>
    <p><u>Answer:</u> 
        JavaScript is  a simple programming language that runs in any browser JavaScript Engine.Whereas, Node JS is an interpreter or running environment for a Javascript Programming language that holds many excesses, it requires libraries that can easily be accessed from Javascript programming for better use.
    </p>
            </div>
            <div className='bg-cyan-400 border-2 border-neutral-400 mr-2 p-5 rounded'>
                <h3>When should I Use Node.js and MongoDB ?</h3>
                <p><u>Answer:</u> There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>
            </div>
            
            <div className='bg-cyan-400 border-2 border-neutral-400 mr-2 p-5 rounded'>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p><u>Answer:</u>
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                </p>
            </div>
            
        </div>
        <div className='flex grid-cols-2 bg-cyan-400 border-2 border-neutral-400 mr-2 p-5 rounded mt-2'>
                <h3>Difference between Mysql and MongoDB</h3>
                <p><u>Answer:</u> 
               <div className='bg-cyan-500 border-2 border-neutral-400 mr-2 p-5 rounded'> <h5>MongoDB</h5>
               1) <u>Use case:</u> <p>
            Real-time analytics , content management, IOT , mobile apps
               </p>
               2) <u>Data Structure:</u> <p>
            No schema defination required.
               </p>
               3) <u>Risk :</u> <p>
            Less risk of attack due to design
               </p>
               4) <u>Analysis :</u> <p>
            MongoDB works great for unstructured data and lends you oppertunity for growth.
               </p>
               </div>
               <div className='bg-cyan-500 border-2 border-neutral-400 mr-2 p-5 rounded mt-1'>
                   <h5>MySQL</h5>
                   1) <u>Use case:</u> <p>
                   Legacy application or applications that require multi-row transactions.
                   </p>
                   2) <u>Data Structure:</u> <p>
                   Structured data with clear schema.
                   </p>
                   3) <u>Risk :</u> <p>
                   Risk of SQL injection attack.
                   </p>
                   4) <u>Analysis:</u> <p>
                   MySQL is a perfect when your data is Structured and you are in need of a traditional relationship database.
                   </p>
               </div>
                </p>
            </div>
        </div>
    );
};

export default Blogs;