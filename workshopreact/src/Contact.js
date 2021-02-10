import React from 'react'

const Contact = () => {
    return (
        <footer className="pt-20 footer bg-gray-600 relative pt-1 border-b-2 border-gray-700 ">
            <div className="container mx-auto px-6">

                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mb-2">Donovan</span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-white">Jean</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-white">André</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-white">Du Pont</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Odilya</span>
                            <span className="my-2"><a href="#" className="text-white text-md hover:text-white">Hey</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-white">Oh</a></span>
                            <span className="my-2"><a href="#" className="text-white text-md hover:text-white">Nice</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Potter</span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-white">XD</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-white">LOL</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-white">AH</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-white font-bold mb-2">
                            © 2021 by Potter
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
