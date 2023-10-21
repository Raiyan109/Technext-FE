import { BsSearch } from 'react-icons/bs'
import Select from '../components/Select/Select';
import Checkbox from '../components/Checkbox/Checkbox';
import Items from './Items';

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
                <div className='flex flex-col md:flex-row justify-between items-center gap-5 md:gap-24 lg:gap-32 px-5 py-10 md:px-6 md:py-5'>
                    {/* Search */}
                    <div>
                        <form>
                            <div className="max-w-xl">
                                <div className="flex space-x-4">
                                    <div className="flex rounded-md overflow-hidden w-full">
                                        <input type="text" className="w-full rounded-md rounded-r-none border border-black text-sm p-2" placeholder='Search' />
                                        <button className="bg-indigo-600 text-white px-3 text-lg font-semibold py-3 rounded-r-md">
                                            <BsSearch className='text-sm' />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Filters */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-9 py-12 px-20'>
                        <div>
                            <Select
                                option1='By Launch Date'
                                option2='Last week'
                                option3='Last month'
                                option4='Last year'
                            />
                        </div>
                        <div className='mb-12'>
                            <Checkbox />
                            <Select
                                option1='By Launch Date'
                                option2='Last week'
                                option3='Last month'
                                option4='Last year'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Items />
        </div>
    );
};

export default Home;