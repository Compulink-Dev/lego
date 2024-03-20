'use client'
import Subtitle from './subtitle'
import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'
import { MdPerson } from 'react-icons/md'
import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Title from './Title'
import { Colors } from '@/constant/colors'
import { hosts, speakers } from '@/constant/data'
import Image from 'next/image'


const Speaker = ({ imageUrl, name, desc, post, link }) => {
  return (
    <div
      href={link}
      className="mx-8 flex justify-between mb-8">
      <div className="border border-white w-full h-full rounded text-white flex flex-col justify-between">
        <div className="flex items-center justify-center p-4">
          <Image
            src={imageUrl}
            alt={name}
            width={180}
            height={180}
            className='rounded-full p-4 bg-white'
          />
        </div>
        <hr />
        <div className="p-8 text-center h-full text-sm bg-gradient-to-br from-blue-950 via-blue-600 to-blue-300 bg-blue-600 flex flex-col gap-2 items-center justify-center">
          <p className="font-bold text-lg">{name}</p>
          <p className="">{post}</p>
          <p className="font-bold text-lg">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Speakers() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div
      style={{ backgroundColor: Colors.primary }}
      className=" bg-blue-950 py-4">
      <div className='m-8'>
        <Title color={Colors.white} name='Speakers' />
        <Subtitle title='Evolve ICT Summit' color='text-white' />
      </div>

      {/* <div className="flex w-full my-40 items-center justify-center text-lg text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4">Speakers are loading soon</p>
          <PulseLoader
            color="#ffffff"
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 gap-x-4">
        {
          speakers.map((speaker) => (
            <Speaker
              key={speaker.id}
              name={speaker.name}
              imageUrl={speaker.image}
              desc={speaker.desc}
              post={speaker.post}
              link={speaker.link}
            />
          ))
        }
      </div>

      {/* <div className="flex items-center justify-center my-8">
        <Button
          style={{ backgroundColor: Colors.blue }}
          className='md:w-1/5 p-6 bg-blue-950 mb-8'>
          <Link href={'/speakers'}>View all speakers</Link>
        </Button>
      </div> */}

      <div className=''>
        <div className='my-8'>
          <div className='mx-8'>
            <Title color={Colors.white} name='Hosts' />
            <Subtitle title='Evolve ICT Summit' color='text-white' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 gap-x-4 mt-8'>
            {
              hosts.map((host) => (
                <Speaker
                  key={host.id}
                  name={host.name}
                  imageUrl={host.image}
                  desc={host.desc}
                  post={host.post}
                  link={host.link}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers