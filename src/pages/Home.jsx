import { BsSearch } from 'react-icons/bs'
import Select from '../components/Select/Select';
import Checkbox from '../components/Checkbox/Checkbox';

const Home = () => {
    return (
        <div >
            <div className="text-center py-4 mt-10 space-y-4">
                <h1 className="text-4xl">Spaceflight details
                </h1>
                <h4 className="text-gray-500 text-sm">Find out the elaborate features of all the past big spaceflights.</h4>
            </div>

            {/* Search and Filters */}
            <div className='flex justify-center items-center text-sm'>
                <div className='flex justify-between items-center'>
                    {/* Search */}
                    <div>
                        <form>
                            <div className="max-w-xl">
                                <div className="flex space-x-4">
                                    <div className="flex rounded-md overflow-hidden w-full">
                                        <input type="text" className="w-full rounded-md rounded-r-none border border-black text-xl p-2" placeholder='Search' />
                                        <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                                            <BsSearch />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Filters */}
                    <div className='flex items-center gap-9 py-12 px-20'>
                        <div>
                            <Select />
                        </div>
                        <div className='mb-12'>
                            <Checkbox />
                            <Select />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;