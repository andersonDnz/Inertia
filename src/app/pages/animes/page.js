import Link from 'next/link';

import Image from 'next/image';


const Dashboard = () => {

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
        <h1 className="text-3xl font-bold mb-4">Os maiores animes que chegam em 2024</h1>
        <p className="text-gray-600 mb-4">
          Um grande ano para os amantes de animação.
        </p>
        <div className="mx-auto mb-6 w-full max-w-[700px]">
          <Image
            src="https://sm.ign.com/t/ign_br/gallery/t/the-bigges/the-biggest-anime-coming-in-2024_xf48.600.jpg"
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

            <p className="text-gray-700">Conforme 2023 chega ao fim e celebramos todos os animes fantásticos do ano passado,
              nós do IGN já estamos pensando nas possibilidades e potencial de 2024, além dos animes altamente aguardados que chegarão às
              telas no próximo ano. Da tão esperada adaptação de Junji Ito a um anime Isekai da DC, há muito o que esperar.</p>
          </div>
          <div className="mb-4">

            <p className="text-gray-700">E se você está aguardando o retorno de uma temporada como Oshi No Ko ou That Time I Got Reincarnated as
              a Slime, então você também está com sorte. Confira alguns dos maiores animes que chegam em 2024 logo abaixo.</p>
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="text-left">
            <h2 className="text-xl font-bold mb-2 text-red-900">Uzumaki</h2>
            <div className="mx-auto mb-6 w-full max-w-[700px]">
              <Image
                src="https://sm.ign.com/ign_br/photo/t/the-bigges/the-biggest-anime-coming-in-2024_whrm.jpg"
                alt="animes"
                width={800}
                height={600}
                layout="responsive"
                className="mb-1 rounded m-auto"
                style={{ height: 'auto', width: 'auto' }}
              />
              <p>Adult Swim.</p>
            </div>
            <p className='text-gray-600 mb-1'>
              Adaptar o estilo de arte icônico de Junji
              Ito é uma tarefa difícil e embora tenha
              havido muitas adaptações de ação ao vivo
              e uma série de antologia de anime nos últimos anos,
              os fãs ainda estão esperando por um anime do autor que 4
              seja verdadeiramente excelente.
            </p>
            <p className='text-gray-600 mb-3'>

            </p>
            <p className="text-gray-600 mb-10">
              Esperamos que Uzumaki se encaixe nesse perfil.
              A série de quatro episódios no Adult Swim irá adaptar
              a obra-prima do mangaká, que segue os habitantes de uma
              cidade japonesa que são assombrados por espirais rodopiantes.
            </p>
            <h2 className="text-xl font-bold mb-2 text-red-900">Kaiju No. 8</h2>
            <div className="mx-auto mb-6 w-full max-w-[700px]">
              <Image
                src="https://sm.ign.com/ign_br/blogroll/t/the-bigges/the-biggest-anime-coming-in-2024_r2b2.jpg"
                alt="animes"
                width={800}
                height={600}
                layout="responsive"
                className="mb-1 rounded m-auto"
                style={{ height: 'auto', width: 'auto' }}
              />
              <p>Crunchyroll.</p>
            </div>
            <p className='text-gray-600 mb-1'>
              Kaiju No. 8 de Naoya Matsumoto é um dos mangás mais vendidos
              dos últimos anos, e não poderíamos estar mais animados com o anime.
              Caso você não tenha tido a oportunidade de lê-lo, a história se passa
              em um mundo onde os monstros atacam regularmente cidades ao redor do mundo.
            </p>
            <p className='text-gray-600 mb-3'>

            </p>
            <p className="text-gray-600 mb-10">
              Esperamos que Uzumaki se encaixe nesse perfil.
              A série de quatro episódios no Adult Swim irá adaptar
              a obra-prima do mangaká, que segue os habitantes de uma
              cidade japonesa que são assombrados por espirais rodopiantes.
            </p>


            <h2 className="text-xl font-bold mb-2 text-red-900">Sand Land</h2>
            <div className="mx-auto mb-6 w-full max-w-[700px]">
              <Image
                src="https://sm.ign.com/ign_br/photo/t/the-bigges/the-biggest-anime-coming-in-2024_jjrt.jpg"
                alt="animes"
                width={800}
                height={600}
                layout="responsive"
                className="mb-1 rounded m-auto"
                style={{ height: 'auto', width: 'auto' }}
              />
              <p>Toho.</p>
            </div>
            <p className='text-gray-600 mb-1'>
              Akira Toriyama tem outro novo anime chegando às telas em 2024.
              Sand Land é baseado no mangá de mesmo nome dos anos 2000.
              A história distópica se passa em um mundo onde a água secou e
              um grupo desorganizado de sobreviventes precisa se unir para
              derrubar os responsáveis
              sedentos de poder.
            </p>
            <p className='text-gray-600 mb-3'>

            </p>
            <p className="text-gray-600 mb-10">
              Sand Land já foi adaptado para jogo e um filme em animação de 2023.
              O anime deve expandir o mundo da obra entregar mais de Toriyama para
              espectadores ao redor do mundo.
            </p>


            <h2 className="text-xl font-bold mb-2 text-red-900">Esquadrão Suicida Isekai</h2>
            <div className="mx-auto mb-6 w-full max-w-[700px]">
              <Image
                src="https://sm.ign.com/ign_br/photo/t/the-bigges/the-biggest-anime-coming-in-2024_mtjb.jpg"
                alt="animes"
                width={800}
                height={600}
                layout="responsive"
                className="mb-1 rounded m-auto"
                style={{ height: 'auto', width: 'auto' }}
              />
              <p>Warner Bros.</p>
            </div>
            <p className='text-gray-600 mb-1'>
              A DC tem feito um grande movimento em anime e mangá este ano com o
              lançamento de três novas séries de mangá que fizeram os fãs falarem.
              Joker: One Operation Joker, Superman vs. Meshi e Batman: Justice Buster
              lançaram os personagens da DC sob uma luz totalmente nova e, em 2024,
              eles estarão saltando em nossas telas em um novo anime.
            </p>
            <p className='text-gray-600 mb-3'>

            </p>
            <p className="text-gray-600 mb-10">
              O Wit Studio está por trás do belo show que destacará personagens
              como Harley Quinn (Arlequina), Peacemaker (Pacificador), Deadshot
              (Pistoleiro) e King Shark (Tubarão-Rei).
            </p>

            <h2 className="text-xl font-bold mb-2 text-red-900">DanDaDan</h2>
            <div className="mx-auto mb-6 w-full max-w-[700px]">
              <Image
                src="https://sm.ign.com/ign_br/photo/t/the-bigges/the-biggest-anime-coming-in-2024_tk7g.jpg"
                alt="animes"
                width={800}
                height={600}
                layout="responsive"
                className="mb-1 rounded m-auto"
                style={{ height: 'auto', width: 'auto' }}
              />
              <p>Crunchyroll.</p>
            </div>
            <p className='text-gray-600 mb-1'>
              Este mangá sobrenatural inventivo e hilário conquistou os fãs quando
              foi lançado em 2021. Esperamos ansiosamente pela adaptação do anime desde então.
              A série de sucesso de Yukinobu Tatsu apresentou aos leitores Momo Ayase e Okarun,
              dois jovens estudantes do ensino médio que acreditam em duas partes muito diferentes do sobrenatural.
            </p>
            <p className='text-gray-600 mb-3'>

            </p>
            <p className="text-gray-600 mb-10">
              Momo sabe em seu coração que os fantasmas são reais e Okarun é um verdadeiro alienígena
              obstinado. Mas quando acontecimentos estranhos ocorrem, a dupla descobre que há mais no
              sobrenatural do que eles poderiam imaginar. Se isso não te deixa animado, está sendo feito
              pela Science SARU, o estúdio por trás da recente adaptação de Scott Pilgrim!
            </p>

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

export default Dashboard;