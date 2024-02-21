import Link from 'next/link';

import Image from 'next/image';


const Vikings = () => {

  const imageUrl = 'https://images3.alphacoders.com/132/1323165.png';

  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-32'
      style={divStyle}
    >
      <section className=" max-w-5xl w-full mx-auto p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Vikings | Criador e elenco se reúnem para celebrar 10 anos da série: “Sonho”</h1>
        <p className="text-gray-600 mb-4">
          Um grande ano para os amantes de animação.
        </p>
        <div className="mx-auto mb-6 w-full max-w-[700px]">
          <Image
            src="https://imgs.search.brave.com/sKHVhlnxknFaNN2yUyLXFEuSxLf6SEjxFkbAg_plQAk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJtZW1vcnku/Y29tL3VwbG9hZHMv/NTg5L3Zpa2luZ3Mt/YmFja2dyb3VuZC1o/ZC0xMDgwcC0zNDYy/MjEuanBn"
            alt="capa animes"
            width={800}
            height={600}
            layout="responsive"
            className="mb-6 rounded m-auto"
            style={{ height: 'auto', width: 'auto' }}
          />
        </div>
        <div>

          <div className="mb-4">




          </div>
          <div className='mr-[100%] p-2 px-2 border w-20 border-blue-600 bg-blue-400 rounded-full text-lg'>
            <Link href="/">
              Voltar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vikings;