import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAreSection() {
  return (
    <div className='bg-gray-50 py-12 md:py-20 px-8 md:px-16 lg:px-32'>
      <div className='max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10'>
        {/* Left Section */}
        <div className='bg-white rounded-lg shadow-md p-6 lg:p-10'>
          <h2 className={`text-primary-main mb-4 ${openSans.className}`}>
            Who We Are in Christ
          </h2>
          <h1
            className={`text-2xl md:text-5xl font-bold text-gray-900 mb-6 ${playfairDisplay.className}`}
          >
            An Army of Purpose, Faith, and Victory.
          </h1>
          <p
            className={`text-gray-700 leading-relaxed mb-6 ${openSans.className}`}
          >
            Christ’s Victorious Army is a full-gospel, interdenominational, and
            non-denominational word-based ministry dedicated to ministering unto
            God, helping believers deepen their relationship with God and live
            lives of wholehearted service to Him. Whether you’re just starting
            your journey or you’ve been walking with Him for years, there is
            room for you to grow, connect, and thrive here. Our purpose is to
            partner with God in ensuring His eternal plan is fulfilled on earth.
          </p>
          <p
            className={`text-gray-700 leading-relaxed mb-6 ${openSans.className}`}
          >
            To this end, we devote ourselves to fellowship, prayer, and
            spiritual disciplines—practices that shape us to reflect Christ more
            fully, reveal God’s eternal purposes, and empower us to fulfill our
            part in His divine plan.
          </p>
          <p className={`text-gray-700 leading-relaxed ${openSans.className}`}>
            We are like the Joel 2 and Revelations 19 army, where the Lord
            Himself leads His people with strength and clarity. Each of us walks
            in our unique God-given purpose, yet we move together as one body,
            unified in mission. Our calling is global—every sector, every
            nation—because God’s plan encompasses the whole earth, and we war
            from a standpoint of victory, by the Word of God.
          </p>
        </div>

        {/* Right Section */}
        <div className='grid grid-cols-1 gap-6 bg-white rounded-lg shadow-md p-4 lg:p-6'>
          {/* Top Image */}
          <div className='relative rounded-lg overflow-hidden'>
            <Image
              src='/images/wwa.png' // Replace with your image path
              alt='Worship'
              layout='responsive'
              width={100}
              height={65}
              objectFit='cover'
              className='rounded-lg'
            />
          </div>

          {/* Mission and Vision Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Vision Card */}
            <div className='bg-card-light rounded-lg shadow-md p-6 text-left'>
              <h3
                className={`text-2xl md:text-4xl font-semibold text-gray-900 mb-4 flex md:flex-col ${playfairDisplay.className}`}
              >
                <span>Our</span> Vision
              </h3>
              <p
                className={`text-gray-700 leading-relaxed ${openSans.className}`}
              >
                We see the world overflowing with the knowledge of God’s glory,
                just as the waters cover the seas, and the world transformed
                into His kingdom and that of His Son, Jesus Christ. (Rev. 11:15)
              </p>
            </div>

            {/* Mission Card */}
            <div className='bg-card-light rounded-lg shadow-md p-6 text-left'>
              <h3
                className={`text-2xl md:text-4xl font-semibold text-gray-900 mb-4 flex md:flex-col ${playfairDisplay.className}`}
              >
                <span>Our</span> Mission
              </h3>
              <p
                className={`text-gray-700 leading-relaxed ${openSans.className}`}
              >
                To disciple and equip Christians to live out God’s purpose for
                their lives and to establish His victory over the kingdom of
                darkness in every space and every sphere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 flex justify-center'>
        {/* Learn More Link */}
        <Link
          href='/learn-more'
          className={`text-primary-main text-xl border-b-2 border-primary-main flex text-center mt-4 gap-2 ${openSans.className}`}
        >
          Learn More
          <Image
            src={'arrow-right.svg'}
            alt='arrow-right'
            width='20'
            height='1'
          />
        </Link>
      </div>
    </div>
  );
}
