import React,{ Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Televisi from "./container/Televisi/Televisi";
// import Keranjang from "./container/Televisi/Keranjang";
// import apple from './apple.png'
// import samsung1 from './samsung1.png'
import foto from './FAHMI.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Televisi.css';

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          <img src="https://media.wired.com/photos/5ed7d5b17f41315c30f0d5d1/master/w_2611,h_512,c_limit/5017.png" alt="Gambar" />
          <li>
            <Link to="/about" ><span>About</span></Link>
          </li>
          <li>
            <Link to="/keranjang" ><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/list-product" ><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/" ><span>Home</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="carousel-televisi">
      {/* <img src={apple} id="img-bg" /> */}
      <Carousel showStatus={false} showIndicators={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div>
          <img src="https://th.bing.com/th/id/Rcf2edea17ff2ac288b4a2650d44a33cd?rik=DwXd4W6YI8GpIQ&riu=http%3a%2f%2fblog.bestbuy.ca%2fwp-content%2fuploads%2f2020%2f05%2f2020-The-Terrace_Key-Visual_Print-H.jpg&ehk=z9SigibUYSXgo0PScIj2XrKt4%2fhwUs1V8yIgyAAEA6A%3d&risl=&pid=ImgRaw" alt="gambar" />
          {/* <p className="legend">Macbook Pro 2020</p> */}
        </div>
        <div>
          <img src="https://www.tvadvertisingmedia.com/wp-content/uploads/2018/01/ondemandtest1.png" alt="gambar" />
          {/* <p className="legend">Macbook Pro 2019</p> */}
        </div>
        <div>
          <img src="https://thegadgetflow.com/wp-content/uploads/2020/05/Samsung-The-Terrace-QLED-4k-Outdoor-Smart-TV-04-1200x675.jpg" alt="gambar" />
          {/* <p className="legend">Macbook Pro 2018</p> */}
        </div>
      </Carousel>
      <center><p id="promo-t1">PROMO TERBARU</p></center>
      <center><p id="promo-t2">Dapatkan info promo terbaru disini</p></center>

      <ul className="menu-promo">
        <li><a id="recomend" href="#recomended"> Our Recommendations </a></li>
        <li><a href="#Hdtv">HD Tv</a></li>
        <li><a href="#FHDtv">Full HD Tv</a></li>
        <li><a href="#Smarttv">Smart Tv</a></li>
      </ul>

      <div className="promo-content">
        <div className="column">
          <p id="label-1">POPULAR</p>
          <div className="img-promo">
            <img src="https://images.samsung.com/is/image/samsung/id-qledtv-q95t-qa75q95takxxd-frontsilver-thumb-234256690?$160_160_PNG$" alt="gambar" />
          </div>
          <center><p className="nama-promo">75 Q95T QLED Smart 4K TV (2020)</p></center>
          <center><p className="detail-promo">Enjoy Special Offers! Free Air Purifier AX34 and CashBack*</p></center>
          <button className="btn btn-sm btn-buy">Buy Now</button>
        </div>
        <div className="column">
          <p id="label-2">TERLARIS</p>
          <div className="img-promo">
            <img src="https://images.samsung.com/is/image/samsung/id-fhd-t5500-ua43t6500akxxd-frontblack-thumb-229359103?$160_160_PNG$" alt="gambar" />
          </div>
          <center><p className="nama-promo">43 T6500 FHD Smart TV 2020</p></center>
          <center><p className="detail-promo">Free Samsung Soundbar Q70T*</p></center>
          <button className="btn btn-sm btn-buy">Buy Now</button>
        </div>
        <div className="column">
          <p id="label-3">PRE-ORDER</p>
          <div className="img-promo">
            <img src="https://images.samsung.com/is/image/samsung/id-qled-tv-q800t-qa82q800takxxd-frontsilver-thumb-223783578?$160_160_PNG$" alt="gambar" />
          </div>
          <center><p className="nama-promo">82 Q800T QLED 8K Smart TV (2020)</p></center>
          <center><p className="detail-promo">Get 15% OFF</p></center>
          <button className="btn btn-sm btn-buy">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className="About">
      {/* <center><h2>Biodata</h2></center> */}
      <div id="bio">
        <p id="p-1">Hello,I'm</p>
        <p id="p-2">Fahmi Firmansyah</p>
        <p id="p-3">Teknik <p id="p-3-2">Informatika</p></p>
        <p id="p-4">kelas TI-3H</p>
        <p id="p-5">I am a student majoring in Information Technology from the Malang State Polytechnic campus who has the ambition to create my own startup.</p>
      </div>
      <img src={foto} alt="gambar" />
      <div id="kotak" />
    </div>
  );
}

function Products() {
  return (
    <div>
      <Televisi />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

const Post = (brg) => {
  return (

      <div className="televisi">
          <div className="konten-televisi">
          <p id="id-brg">ID : {brg.id}</p>
              <div className="gambar-televisi">
                  <img src={brg.gambar} width="150" height="150" alt="" />
              </div>
              <div className="isi-televisi">
                  <p id="nama-brg">{brg.nama}</p>
                  
                  <p>Stok : {brg.stok} </p>
                  <p id="harga-brg">Rp. {brg.harga}</p>
              </div>
              <button className="btn btn-sm" onClick={brg.tambahTelevisi.bind(this, brg.id)}>Beli</button>
          </div>
      </div>

  )
}

const PostKeranjang = (brg) => {
  return (
              <tr>
                  <td align="center">{brg.no}</td>
                  <td align="center">{brg.id}</td>
                  <td align="center">{brg.nama}</td>
                  <td align="center"><img src={brg.gambar} alt="gambar" width="150" height="150"/></td>
                  <td align="center">{brg.harga}</td>
                  <td align="center">{brg.qty}</td>
                  <td align="center">{brg.harga * brg.qty}</td>
              </tr>
  )
}

class Keranjang extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        var no = 0;
        var total = 0;
        return (
            <div className="post-televisi">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Keranjang</h2></center>
                <div className="tgh">
                    <table border="1" cellpadding="5" width="100%">
                        <tr>
                            <th align="center">No</th>
                            <th align="center">ID Produk</th>
                            <th align="left">Nama</th>
                            <th align="center">Gambar</th>
                            <th align="center">Harga</th>
                            <th align="center">Qty</th>
                            <th align="center">Subtotal</th>
                        </tr>
                        {
                            this.state.listKeranjang.map(televisi => {
                                no += 1;
                                total+=televisi.harga*televisi.qty
                                return (
                                    <PostKeranjang
                                        no={no}
                                        key={televisi.id}
                                        id={televisi.id}
                                        nama={televisi.nama}
                                        harga={televisi.harga}
                                        gambar={televisi.gambar}
                                        stok={televisi.stok}
                                        qty={televisi.qty}
                                        tambahTelevisi={this.handleGetTelevisi} />
                                )
                            })
                        }
                        <tr>
                            <td colspan="6" align="right">Total : </td>
                            <td align="center">{total}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

class Televisi extends Component {
    state = {
        listTelevisi: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/televisi')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listTelevisi: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetTelevisi = data => {
        fetch(`http://localhost:3001/televisi/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataTelevisi = { ...this.state.insertKeranjang };
                dataTelevisi["id"] = res["id"];
                dataTelevisi["nama"] = res["nama"];
                dataTelevisi["gambar"] = res["gambar"];
                dataTelevisi["harga"] = res["harga"];
                dataTelevisi["stok"] = res["stok"];
                dataTelevisi["qty"] = 1;
                this.setState({
                    insertKeranjang: dataTelevisi
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                gambar: res["gambar"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-televisi">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="tgh">
                    {
                        this.state.listTelevisi.map(televisi => {
                            return (
                                <Post
                                    key={televisi.id}
                                    id={televisi.id}
                                    nama={televisi.nama}
                                    harga={televisi.harga}
                                    gambar={televisi.gambar}
                                    stok={televisi.stok}
                                    tambahTelevisi={this.handleGetTelevisi} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App;
