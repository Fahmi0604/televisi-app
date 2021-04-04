import React from "react";

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

export default Post;