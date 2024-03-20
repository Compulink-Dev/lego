'use client'
import { Colors } from '@/constant/colors';
import Link from 'next/link'
import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Title from "@/components/Title"
import Subtitle from "@/components/subtitle"
import { Button } from '@/components/ui/button';




const Event = () => {
    return (
        <div className="w-full md:w-[400px] h-[400px] border rounded text-center">
            <div className="h-2/5 bg-purple-600 rounded-tl rounded-tr"></div>
            <Subtitle color='text-purple-600' name='Artificial Intelligence' />
        </div>
    )
}

function About() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div
            style={{ backgroundColor: Colors.bgColor }}
        >
            <div

                className='m-8 '>
                <div className="text-center pt-8">
                    <Title
                        color={Colors.primary} name='ABOUT OUR ANCHOR EVENTS' />
                    <p className="text-gray-500 mt-2 mx-8 text-sm">The Annual ICT Summit is proudly hosted in the Harare, Zimbabwe, functions as a powerhouse where businesses engage in talks, networking for business development opportunities, and create platforms to strategize and discuss new topical ICT issues, trends, innovative ideas, and online communications.</p>
                </div>
                <div className="w-full flex items-center justify-between flex-wrap gap-4 md:gap-0 my-8">
                    {/* <Event />
                <Event />
                <Event /> */}
                    <div className="flex w-full my-36 items-center justify-center text-lg ">
                        <div className="flex flex-col items-center justify-center">
                            <p
                                style={{ color: Colors.primary }}
                                className="mb-4">Events are loading soon...</p>
                            <PulseLoader
                                color={Colors.primary}
                                loading={loading}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center my-8">
                    <Button
                        style={{ backgroundColor: Colors.blue }}
                        className='md:w-1/5 p-6 bg-purple-600 mb-8'>
                        <Link href={'/login'}>Register your interest</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About