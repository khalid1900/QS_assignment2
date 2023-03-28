import React from 'react'

function CustomerReview() {
    const people = [
        {
            comments: " is simply dummy text of the printing and typesetting industry Ipsum has been the industrys standard dummy text ever since the , when an unknown printer ",

            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            comments: " is simply dummy text of the printing and typesetting industry Ipsum has been the industrys standard dummy text ever since the , when an unknown printer ",
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            comments: " is simply dummy text of the printing and typesetting industry Ipsum has been the industrys standard dummy text ever since the , when an unknown printer ",
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            comments: " is simply dummy text of the printing and typesetting industry Ipsum has been the industrys standard dummy text ever since the , when an unknown printer ",
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            comments: " is simply dummy text of the printing and typesetting industry Ipsum has been the industrys standard dummy text ever since the , when an unknown printer ",
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            comments: " is simply dummy text of the printing and typesetting industry Ipsum has been the industrys standard dummy text ever since the , when an unknown printer ",
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]
  return (
    <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-7xl bg-gray-50 grid grid-cols-10 " >
                    <div className='col-span-9 '>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl grid justify-items-center" >Customer Reviews</h2>
                    </div>
                    <div className='col-span-1 flex items-center'>
                        <button className="grid justify-items-center">See more &#62;</button>
                    </div>
                </div>
                {/* <div className=''><button>SEE MORE&#62;</button></div> */}
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.comments}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.comments}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    {console.log(person)}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default CustomerReview
