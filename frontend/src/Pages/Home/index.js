import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
// import Nav from '../../components/Nav/nav'

import axios from 'axios'
import './styles.css'

function Home() {
    const [media, setMedia] = useState([]);
    // const [mediaReview, setMediaReview] = useState([]);
    // const [user, setUser] = useState([]);


    const getMedia = () => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
            .then((response) => {
                setMedia(response.data)
            })
    }

    // async function grabMedia() {
    //         const data = await axios.get(`http://localhost:9001/media/${media.id}`)
    //         setMediaReview(data)
    //         }

    // async function grabUser() {
    //     const data = await axios.get(`http://localhost:9000/user/${user._id}`)
    //     setUser(data)
    // }

    useEffect(() => {
        getMedia()
    }, []);

    return (

        <div>
            <div className="content">
            <div id='theCarousel' className='carousel slide' data-ride='carousel' >
                <div class='carousel-inner'>

                     {/* Blake's Movie */}
                    <div className='carousel-item active'>
                        <img src='data:image/jpeg;base64,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'/>
                        <div className='container'>
                            <h1>Gladiator</h1>
                            <p>A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.
                                < br/>
                            <em className='devPick'>Picked by Blake</em>
                            </p>

                        </div>
                    </div>

                    {/*  Rory's Movie */} 
                    <div className='carousel-item'>
                        <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxgXGBgXFxcVFxUYFxcWGBUVFxcYHSggGBolHRUYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQ0AuwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABHEAABAwIEAwUECAIGCQUAAAABAgMRACEEBRIxQVFhBhMicYEykaHwBxQjQlKxwdFi4TNyktLT8RVTc4KDk6LCwyQlNaOy/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAwUCBv/EADsRAAEDAwIDBQYFAwIHAAAAAAEAAhEDBCESMQVBUWFxgcHwEyKRobHRFCMyM2JS4fEkcjRCQ0SCssL/2gAMAwEAAhEDEQA/AMONBXUs2E31Ei1oEyZFjcQIm99qEJGjT0/lSiGyowhJJOwHiO19hSqcC4TAbWTEwEqJiSknb8QI8xFCE0o1HW2UmFAg8iIPSxoqakCUItCBQqFAmpjKhCRQGjGgNSQhHQ2SY4zEbX2qReyDEIICm4JJAlSd0uJaPH8a0j1na9SmLVgu7U43HfFDagkawAtxIQ6kA7FtSFLBm/egX03WUoLD6UueIs4bTLpA7wpbOKAlUE6i7I6mKAEKu4jLnEAlSYAVoPiSdK/EdJg2PhNulMqt7uBUpadRKmjhiY7xSh36cKop1CbHvyAAbcNqh80aaSyxoCQ5Cg4AdSp8JCiZ8M6iNJAIKFbgighEqKKCN7UEUs2BzA3NxIkCQI6m3rSVSRCESjhFctJG/Q+8SPgaMBUNCCiKFADR1i9CGFfhVfaxvO1cndSkq6aEj40FQhBRootDQhBVhwWWsllK1XCmnlKcCwO6db1900U/xaW99+9t7JqvkV00IVpweWBDqlJQogYVDiADOtam2O9RBB1D7VY0weV4NSamArvNWLKUagCCWj9mtDbmNaCgkBTqVOJAgAKLbhgVQzQUIVnxuS6hinFuEvJdcKAY+1S2sB9WwE/aJUCLQhy3Ls7yRlltS2nSohxtvQojWgqbcUsqAHiSdKSlQtBINxVYp1h01ZTbJUOMBIqFFFOMUiKbVNRulyhpkShmjkWmk6VWq0Vy3MqShQ5AsB50Ic50CUzAAqwZP2YW7BmB1qH1W0xLjAXdOk6oYaEbs6U6hdYVwIAUB/WTvFP+0eVoLoTpGtQkFKjw4Qd/WpbDdnAhNhfnxqDznAKT4hIi/G3lSTrxtWoA0wmxZOpsLiFW32SmxH7GKbLFWx9lL+HUsABxoCTM6x1/iqsOIgwYnlTgfqxzSmggJLrPHb58/hVoT2dRNu9WNWGSUoKdaA+ylxTipTGkEkDYWuRxq5AmlsQ4oqJWdSjuTcn1roDdcqxYXLG0d263iEpPe9yFmCA93oCnQCP6LuVJWJO53td6pLiltpWXG3VrdS2hxLQV3rIaXh1ewBpWuEcpBOoiYpS1TRJrk7oVsGWoxGlIchCH04dCoQBpUhazBAElS0kpk/fvuTUeMoSe91JcYLbAch6TcvttSdLYOmF8txyqCrhUIT7OcGGcQ80JhtxaATuQlRAJsNwJ240z9fhRQaHSeVCEWurq6hCMBNhQV0V1CFwFSeAakWEnlxNRdab9F+TBYLqhsYH5n4R76vouawOqP2aJXD2l0MbuTCh3uw+LXhlYnRASCrTB1FIuYgcqpVeucGkKbCOGx8orzt9J/ZsYHHLQgQ0sBxvoD7SfRQPpFK/i216mBiArvYmm2DuqfXV1CK7XCnuz2G1EVpeW4YhItFVDsW2nUJ+bVp2C0CJArH4i8l+lbVkA2nKa/UiUzHwqDzhgQQR7/KtBaxKFJIAEbTVP7QNDX0rOGCMp1jy6QQqBi8L3LZKSRrlJ9YI84kfMVXnMIYKuHO9/5VPZjK3AgnY7dbcKZO2UmNiY23EwTHL9K3mPcN8k5WZ7BjmknYGPXx/uoFwdZrnXJA6CKd4rBFJgp03PG/5xTFQ3psGVnOaWnKToaCj8P0v7/hQuESurq6hCGgpRuJ8QJHQwel4NEoQumgrqXZd0kmAZBFwD7QIkTsRNjwNCEjNBQ0FCENbB2HzrCsMNtqdRrgKUmdlET7+FZK+gBRCVBQBICgCAoTYgG4nrU52c7PLxZASoIhSUmypg7qBgielqXumB9MhztI5+SZtXEP8AdbJ9Stixn0g4bCGFJU6qxCUxx23tVJ+lbPhjGWVnDKaKFkAkpNlpJKSBsfCk+hq+5n2Ww2KAb7sBSU6EqHhUSkQNSuX71nvb/sUnD4cPoQEd2UIWkcrjWoRuTpvMe+s2zewFgkgz4H7fNOXLJDiOnXPnKzYCuFcKFIrbWUrRkWanDKDika25CVaTsYmLjetMynN28S0p5tJITaNjNybTyrFcQ5IHQRO5Pma076LJGGkixcV62vWbxKm0M9pzkBaVhUcXGnyiVO4bt7Ku4GFICpCSQohRBSDpUhB1GVAdJHOmOOdW5KoGk31JVqSfKrbguzrKHgu48RUkg2SVDxFI+6o8SN6adowEak8OnCs6q9sAsCet8PImZ9ZWTOIV3q1kj20pHUuR7oEmp/s72eXiX7QQ2Lck856zUZmKIWFi0ulO9jAb4c9z5JNWzsR2lRh8PiEBDing7J0tlaQhekNlUDYmbTPGnX+0eBHTkM+vuoFRtOmY/qxJxJkz4eShs9yUEbAlM+fu/Ss7x7WlRAEVreKxwxUqbRC0g94mCDHMpIlJB51ludOoUqxvJnpfau7F7wS1yovw11MOxPhnuUWBNHS2TJtYSbgcQLTvcjakqHzrSWOhXvvPv/WjIMGbWvcSPcd6MsJGxJsOEQeI4yOtqRoQlZmOg4QP896Tg1xFDPWhCLXUNdQhHUmCQeFufxFJ0NdNCF1atkecIwWEw2IDYWkWXBAIURCVdYJPvFZURFWvs/mZSENKSVoKpCREk8pVYVTcUDVZMTpIMfEJm1rCm+DzEegtMyHO8ViVpcRg3G0rMpcJBTH4jeR7r8KmM3zBKmHW30AlSSlQNwR0/eonK+0q20x9UWkFVvt8OVXP4SpM+lMe1ePcWlS1p02t4gZ842P71h6PeGjHcZWvn/nGBz2WR5rhEtrOgymbTuB+tMBT7M1yo0zWmIr0bWnTlYLyNWEdyI+bVrXYLFg4JLYQlJB3KiJMqlVgY478qyfDRMkTWm9llE7YZV0pBIWNA0ixEpuTM/M0pft1U4Pl5kJywnWSFqDWLBTEgkAX9KrHah7wLJPA/rUlgGtKhZSbbKIPCd0kiqd2/wA1ShtSQZUuwF9udZNOi57gO1aHtGsk9io2Jxkqbk2Cif7Rkz88K076MsPrwT5khwugkyUwO7bLZBF9v1rHQraeYrY/o1xKYDcwHcMgg/xtShYPun31tXtLkPUZWba1yWZPrAVs7L5Zh2m3C2rxLKtciSoxcknfevNWbJh90cnFj3KNeh8bjmcEyVJxCFK0qIQFNnUV21KHtQN7EV53zFep5xUgytRkbGVG46UrZaiZPRWXcacHc/QFNKMqimgrQWeuo6Y47dKKTQUIQijR1Pw/eig11CFwrhQUIoQuVQ/P7UpoOnVFpibRttG/A3rkgEgEgDnHxMXoQgWgpsQQeRsbwQfd+dWHK8OlbcK29rqI3+FV9RBkxF5gbAchN6n8nchNP8PaHOcDzCVu3FrAR1V+7G9lsPhyt5x5JCv6EgiQi5lRsJMjb8PWm3bTNGAgoSqSRzn1NZxmTygqximrSiomTNZz7IfitT3SRj4LRbefkaWtie3+yUUCtVtpoX2xxp4wiE+d6aY/hTzqelhJSLX6nQlMFCbKTIO1av2MabbKSdJKkBUfhBnr6elZXlt0wasWUtXB1mNoki3LyqutZmtSEHCtpXQpPMhaJnvaFIjRJIHDYeZ4b1kOd5ip1wqUbk/DgKsmdZmAjQgQB8z51RVLKlT1odbMt2tA3UC4dWcTyT5LU1dezWOSlrunCUAqKmXk37lavaStO5bVHXc1TAYFExDp0ETV1WkCCCq6VUtIjqrv2qnSS9oDifZ0tjQ7P3gvhPEVnzbRVKotPyBRC6ogJKzp4CSQPThThKiB0pSzohgg/ZN3dwahBCZuJgxSdL4j2rUVpEkCQJIEkwBJ3J4CioIcVUDIREmi0viGtK1IlKtKimUnUkwYlJ4g8DSMVwpXJodB5GgFdQhBQ0FKkjha3G94vw4n540IRQee1FijBW/Xei0IRxF7X4X2/epzA2TtwHxEioCpnBq8Ip/h5/MPcl7kS1MszPiocuEq9KLmB8VDlntHyrne68VP/S8FJxUbmPtelSzd58pqIzBXj9KavRFLxVNv+tOspQYJgxMTFpiYnnU1hW5FQ2Up3EGbVoXZDs0vFNvKRA7lBWbTqVcpQORIBv0pmx0iiHPMAeZj6pe8Di/S3f8AsqXmA3quVaM3ETVZSrYcJ24TzpLibdNQDvTNkZZKmkpsPKkMW3CDT7BtFYAHLckAAcyTtV0R2fwpZR3zzYaXpUotL1OJhMEhJSdO8EHraxpqq0aMZMbD1y3VTHQ7O3Xp/lZSBBHpUsWbUv2gy1tp3QwlZRq8K1LBKk8JSEgJPPfahG1K2dE+8HBXV3gwWlQuIEKI/wAzekaVxJ8RpMJ3ttc9OF/Uis+p+o96absEFBXAV1cKUP7UFcDRtXzJoQuKf02vvRaUaCZGokDiQAojyBIn30VSp3uefH+dCEU0Mdf5UdxERcGRNjMXIg9bflSYoQuqVwR8NRRFS2BHgFPWH7h7lTX/AEpljj4qNl3teldjBJPT8q7Lfbrkf8SO9B/a8FMsi/oR76hsf7Z+fzqaTYioTMD9orzp7iAikO/yS9t+s9yd5MLkfN69GfQ1hgMGtce2uPMJSP7xrztkifF5/uf2r0x9F5Ccua6lR/6iP0qp0jh/eQPqfJT/AN14E/Qeawjtnh+7ddQPuqKfcSP0qnNuRfYhJFpBMzv6GPKtC+lNuMZif9oo+8z+tZzaNvmL0cUd+Y138ZRZCGEdsfBTmH9keVLDHlsTSOEHhHlTfNPZ9afc91OiXt6KjQHv0nqp1hwKSVbjaORP8qRxOFAFqhMBjSghPv8AM1Z0KBFXWdVldh6jfvS9ZjqDuwqlYlMKPnSFT+a4MEk3mRFrEXkzO+1o4nleFWgpNeeuqDqbzO0rXo1A9ohJV1OX1AxtYaRGo7bnxbSST+lFcFhcG02BkE/dUSBJtNpF/OllaiE8trcePP8AOi6DRlgcDNh0vFxSdCEfTafT3z+1FIoKWCJiJJ5RtyoQikzeb/PH0FErQew2SKxTiRiWm1M7KcUmHIi0FJBVtvbz4Gfz3sThcK8l3DpcWBKkISouBUCASjTrHiUDOoiEmuarjT/UD65Lqm0P2KylTRQpSHNSSAZAEmYlIIkWmJ5bwYinuA9irN2kwTCWVPLbKlqhAUCoaSBAkAxw4jpVZwA8FbFtbupVocRls46JB1YVaZIBwYz1THFKhZ+fSjZf/SCiYz2zS+XCXEfH96UZm6H+7zTDv2/BWBbB0zFVnGXWo/PnW1ZzlSU5Dh3ABq71SieML1p/JtHurFsWCFq8+B5i1P8AE3h9MRycR8ErZgg94B+KkMk3B8/z/nXojsg9owbI/hJ96if1rzrkJ8Xz0rdssxMMMj+BP5VZRZrtGjt8lVWdprk9izv6UzOIfPOD/wBIrOb8vkj9q0H6RvE6uN1aQPMgDjWfiIO82jlF59Zj40pxQfmMH8Qr7EywntKsGVolI8qbZ0mB61c/oewgcxuGBEhMr/sJUpPxAqF+krChnFvISAAl1aQIEBPiA+FPVnD8MW89Ad4HCqpg+21dpHmqktpQAWYhRMXE2iTp3AvYxBgxsYsmBf8ACJqsOCLT5/p+9TWHPgHlSnCnFr3eCvvGhzQlsS+DI4z7unzyqKdRRC6ZM2+HlQh4b2PQzB6WvXNWuKuSpZSLNkgtowTwBA3E3mLbnY3/AHpCl1weNEVH8uJ3v886zngA4TQ2SVKJKeIM9CB+lJ0M1whLs4Yqqy5DlA1AqpFhgIEnenLCyrjArYt7ZrYJElZla4c7DcBW7D5vo8DUTsT91P6HypZOc/VJd1ErN1Em6v634U9Bc9Kqa80S0mBE1Xc1zAumNRIsRwFx4gZ4gmJ6VFy5re9Tbtc7uVxz76RRiT3amEhs/wBIpIAU9YAEoNhEbAg9ar7rDSbsq1NK9mfaTtKVSAZE7xeRVbn5/OrJ2ewpcbOkExJMCYA3J6CquGZqhgwBJ+MSmLsgN1nfA+G3r7BQOMELV504ycfapHzxocS0FKIG4JpzkuGIdTO1yPPiKppQbwD+fmrqrXCgXctPkto7QOzlCG/whB+J/vVhWPHiJ5z8DH7VtmbrBwJTxSEe63z61iTv9IQfxK+JrQv26aQb1cfnHkUjZu1PPYB5p32fHjrZcKr7Jr+oKxrs6PtfSthw5+zb/q0xw0TbDvKWvzFbwVH+kLdR8v0qhn2RvueNuHD9avf0g8fSqCaQ4v8AvD/aPNOcO/Z8StZ+hhWh5K/4F/t+tQf0tmcW4rmufekGpf6OzoJ/hbKfWRPxqC+kxUuzzI//ACKduaWmg538APml6VSa4b/In5FUpSjfrU7h0+AeVRaknRHLfz/lU/hMMSyD/DvypPhbSXuA6J28OlrSeZUVg8qeeJXA0A3ccWEIABiNSjc2AgSdrVOYzIhiHJZB0ndcaEE8T4oJv099VpzGqKh4iQnbpHLlU1luarBHiJ6Tt5VRaNoudFScqbh1VrZZCc4/ssllHiVqMfdH5k71WcUzBsIrRm8al1GlXoarea5duRWldcPZ7OaYhIW167XFQqpxXU7eYIm1N4PyKwXMLTC1wZyFPIUTY7flSuIxASnw8NxxHXqKaPOEJvUaXNzqII2tbjMmbcOFaVSt7IQNykWUfaGTsivvlR3rgoQQUzaxmIMpueYgG38U0gTRymJ6cr/EVlkkmSngIwEJOo8B5VpX0ULAbxZPHDPpHmoJArMpq+9hHYad6oUK0uFN1ViD0P1CUvn6KWrt8iqpi1APKI21EHoaf5Rd1BB2M9OtMMZBcX/WM0fJ8R9skbXpcQbwEf1//Sa2tS0824+C1zOVBLKo9lSBHw/I1jYZ1KVeIUfzrWcydnCkcgCPhI/Wsow7kOK6k367itHjEhjB2nyWdwcNfUdO2PNPsgZKXCN7D861HDq8CPIflWaZY79oI4i/5/pWh4dXgT5CmuEybYT1KX4u0MuIHRVPt+d/SqWzJI/hv7rx7/zq6dtFc/m1qqOGTANZ3Fz/AKjwCf4UzVRHaSr99H06fFyJPvmov6QPE5PWfhan/Y1yyvUWMixA3Fj51GduHPF1/lvT9U/6AOP9LfqEjTA/HFo5F3yBVScUrb0t0twrUsrww/0G6riHmvWG3BH/ANhrMEoBBuZEcLaYOokzYzpgQZk7RfQ8I/8A+3FI2kGPQX+FJ8Jbqe7/AMT8CnL9+kNPWR8Qszp3hnYtTWKMDWSx0ZTxEqw5fiyDvU4iCL1TsM5Uxg8de5t87Vv2V0A3S5ZN3bmZCeY7AhQJ41AKwVWRLwVTdSBV1zasqEOCqoV30xBVYexalCD76a0YClIiZG44zbqI+b15pzy8y4raDYGNkCmyCQRBFiDYgjcedJUNKzO+/P8AeuV0MoqU1cexrkNOeSv0qmk/CprIMZoS4OYp/h1dlCtrftBSl7RdWpaGDOFG4hf2iyPxK/OneEjWhXUUgUjxSJnYzEGQZjjaR60CCQrpM22HlSYqfmh46z80/oLaZYdojuwtFzLE/wDpk+X5A1myZJniDVix+ZkspT0PxquYWZrU4pcMrOZoOAD84+yyuHUHUQ7V1+ilsmbPeitLwqDoTbgKoGUI8Y5/Nq2HAdnHi0k6eAPwrQsXCjbjWYyUlfB1atLc4WXdtESfUflVYCbVe+3DC2XSCBMcQFWKdJsoRME+W+9UlUJIlOoC5BJGocpFxWdxVpdUDx0C0uE1RTZpPUqw9jHQCQOtMu1LgU9frTTs1iwhy+1Ns+xIUslO1FW8a6yFEfqwPgilbObemuR7uU3xG1r1bsG7/wChI+dqoyFEGrEzjh9VKZvyqvhtdtFztXMKziNN1wG6RsR8FA6ARRlIgSTPC/wrig0VbZNZoK0C3fGV2uDCeO/zwFKMu03cVwG35+dc0njVzKhalqjA4mFM4bFRUgnEjpUChY4GlO9rUo3RAWfUtxKYdyeF6ELIsduVLow55Ud5ud5rB1iYW4KDg3UMH165pukpPSnDOHTxpt3NOWyRwNDpjBU0on32hLJwjfFSh/ug/rS7bLH+sWP9wH/vpqFzRu5NVGeZTbQ3djQpNvCYQjxPOjyaSf8AyU4TgcBxxL3/ACE/4tQ1xvXFBOwqA09SpJbuPL7Kxpy/LSIOLf8A+Sn/ABKfYbI8pgH628D/ALFP9+qikRS6AdoO9rVZSqFrweSrrUGOpnqtF7MZblgfTOJcN9lNAA+Z1GK3dgJ0jTGmBHlwry1gZ1BQsob/AL1sPZvtG73KQSTp+Nv8q2q4FxTaWu25GPlhedpg0XuDm+vim30p4LAqUC6+ptziEoCp87is3xOU5Xxxbwt/qQf/ACU/7aYouvErM/O3XyqlY0Eq2N9hHCubis1lNtOZgdn22VlvQe+oXRGe377qUGX5ak2xr3/IH+JTZ3LcATbFuerA/wASoZbR2gzyi/upNLZBggjjcEevwrKgnMrY2IaR9Pspd/LMJHhxKz/wY/76Y9wwmweUf+HH/dXAUovBK06ihQT+KDHv2rgOjcq80gctAlNntA2Wf7MfrTbEGLapsDa+4B3HG+3CnqcMSYAJJ2AEkztApJWWuKulC1QYMJJg8rCx6V21w5KiuyoBKYoE7C9LFvmZPIfqf2oHGFAxpII3CrGeo4UZGGVxiuiQNyqKdNxwGz9PXfPcgQCdkx76V0efz60tsN/dSNuR/tVZTrGMBTWtQDk59dAUVpyltZ51Gg0qhaqoNNdMuSBCcONE8al8izRTTeJbU6tOtjQ0ApcBffsOGI9mUtrv/F1NRCCaNpvUSRgrs02uyAp/KcchLGLQ541Pd0QFlwhZQ4VKKlIUDN5ubmn6s3a+tYF4EhDCcOFgBXh7lwqWE6iSoRteq40mnisKop1gSnmPEAeSo2PnVJqEYTzLVhGrY/2hK5q+lxyQrUIgH7S1zbxknryuac4PMA1hXWhOtbzawJWkBKWnkKMoUPFLibGRYzUahunDbSifDw8XC0cTNq49oQcJk2oNPS4beXVLtYxP1MsXKu/7yI8Onu9EzzmjdoM51qb7tSgENspCtTgUVoYbaXYrKRdKoKQJBvvU0nGKeEHBaxqKkG6AkFtCImwI1J134mnmEyha1hf1PDoRC0lBeUQoKVKQSkGIT4d770GtTbu8JY0HxmmZyd2kSf8AHNVjOc6Lym4cWQlhlB1FVnENBC1ATzB8W96ubXa5JXiiD4XCtTcjxeJ1KwFAm1gfWKNhuyCW2yHGWSZUdWpcjUomPu7AhPpIg3AJwjPdttqS2pSElIJBBMpidAtM+Od5NcOvKfJ/yd9lNO0JAlhMdre/r1HZuqLm+PU45JUfP8PUeVPc8zRt3G/WEqOgvFyIWClJeU4PbWrxQrZMJtbjVjzDI0LSoIw7bROmF/aKKYiYtBBj5uC7RlbiDqbwuE3lIClgAym8LSbwNJvsTUtuqMRr/wDb7IqW9TVr0dcS37lVJWIaGYIxSVKUj61358MKCQ8HI3uqP865jFJbxIfSqShDmk6VGFlDgblLilW1KSTw3tzmnW3EK/8AjWT4gfC5qgAk6YJkpPlPpAEXj5+rhtTGlafvGUrAK1kGCLg95pgQLA12KoJ91w64ypFBkZYeTclowZ+O3zSWKzfDdziGWmlNpd7txIICtLyVyUBUz3SUqWlE3uSd7N8ZmCF4VlsTrbbKVDSq8vvO2Vq06YdG6ZketI/6Dd7vvVJKGvxqBAM7abeL0pAoB2JI5mBPWOAqTUEKaVr7+nODPoqeaz9vXhu8QpaGUMQpICXWnGoKggmy2yR7Co3kFJJJgcjxfcl3WpUKw77aQLjW63oSd7DmelcUiknVCNqltYyuqnDmBuSotxCiSSSVHckyT5k03U4ofep44KQU0DTLXTusupTIw3CbFZ5miTR3BRJrtJntThtuaVbRSLLhp0FmqnkpyiGEShpRvzNESmd6W7wCqSeidptEycBLNtTViyDKnJCwrQniSYH86ruHzIJ2QFK4T7I6nnThrM9Kgp0l5fBAMNp8439KXqsqkQPXht4lONuaDRgA9+w8yewLVMw7PYR5jv20hYbEuqQru16UiSdtKzY8ATzEzVIGMGoNtDTpUFkWJCkmW0A8SAApRk3tMAUrl+fPPrbS6uEAgpZbFoBsCNvU1e3cnwOJT3iA3hn0gaighLShN+8URBXE+td2LqNCu01xLRBjf/MbxOTt0WdeC4qUC2k7fbs+3SYx35UUjOwogaVSUysiITbadzewpqc+Htalpgm8SnpE1HYx9MQwdaQY1G2+x/Me6oZbx+9cfr51Tf2VGncFtJmlmNIkmR/Vnr0xG24K1uE1HVLVr6r9bs6sAQRu33cY689xghWcZg24oGVrHHXN/LlUhglonTxMkkAmPNR4VU8NjUJ9pIjzJ+FAvN99JgetIOoE7LScWxEq3jEqQogJEE2IgevSgcxyQrYz52qkOZ2u8KJ6c6jnczec9mb8p+Ndssnu6BKVbimztPYtCdzdPs6imZEzBE8jwNNcH2XxGLX3mtKUA+J0jUFCNJbSmZkpsRwBqmYXBPBetxNwJgnidp5RM+lTuVZsthKkpWPEZKfuE89O09d61Let+DoPZTIcXxIjAHPO8nA6QOZILci4tXXtZri3SGyZ5k8sbYycyZxMAg2l7N1sNfV1IGkzKxDgdO2tzVJ1WveqHnDaAqQkAH7yNvVJ2qWf7QTdRg8jcH13HrUFmeJgkp8M3MHf0pSkHF0kfNOD8hpDYTApnYyKauJNNHFGZFvK1CMUdle+tAUnDISjrtj8OEH5ff4oXEU2UakSiRTZxmrGP5FL1qBiQExUekUSnK2aR01Ys57SDlHbWaeimLW9LFc2FVvEpig+BlLLfiwpGSaes5U+pOtLTikxOoJJTAnjEfdPuNNAsCoGNl252o+8UZKbch+dHbcja35mnLeU4hYBSy4oFIUDpN0kwCOYJB91J4PAurUpLaFKUm6gN0wYM8rmKMqQ5oKf5ZigjclIO4T7a+hPAVIv5wVwk2QNkD2R1PM1Et5RiJH2S5O217KNudkn3Uu1lWI8JDSjqnTsZvFvU1Q6jJmMpyncMAAlTredI9kAkEaYtccZmx2mDy4b1GO42SoEhQmyoFuosI8qRTk2IuO7VIAMRNiYGx2J4+VGOV4gASysW1Dw7i0nyuPfXHssAdNkzTuGNJIIE75GT68kkt0nck+dIqXHGpLC5S9rTrbUEhSZnaCoC/ThVgxmHwiVIQnDq1nvCBpcIISkq1Eb+GBI5TPXtlInsXFe8YD17v8AKpyTSmHKUq1XJHDgfOrBmeXMKS640h5IQkhOlJCNSEq1BeoSCFJM1BHKcTMdyqZKYtOobjffp1oNN2yGXVEiSNuqcHNifbE+63w29aaP4tJAix4/ypU5NiDctKEgkDTchJAVA6EgetIKybEyU9yqREiwibDc9KhlEDkpq3mNx8kg69O9Il60cKVGS4o7MrMkpG11BZbIF7nUCnzoP9BYvxHuT4dxKZFtW0zsZpgU1nvuwSmq44U2VTvC5biHU60NKUkkJkbSSEge8getCnIsSVqbDSitOnUm1tYlHHjVgkJZ9VrtgmTWIKTbblToP6qcjs3iSP6FUxO6dr8J3sbb2pDFZNiGUB1bakoMQoxB1AkcehqC0EqWV3sETI9eoSCjSCvSlkuAikFKHKhqKsGDKSFK95aBSNdXUJcOI2Wn5fnKFtBlt5PsEKSlsbGQTJWASNZAtsTSuIxClKCipMpCxPct2K0kEEF3mkX2uTeCKy8CjkQAedEqQJyr892hUlxKWHG1uqWlo60KSlMLWrUSlwzClnpe0wKl8Ni3QlAU613nsKKE+ApUpWpRUSCYCEbxGqsrjSJFJTRKlw07rV8WpHeaDiASwlDyFAIIOkOISglS7xp6EyL0linu7QAjEJUUFCI1DwBxTYJUoKuU6yQZtpMjlm7WGmb8uE7z+1NnEwagEFdOY9okrWEvDvXE/WEeNLaiZb+4QmLTAgA3vCb8wZ7FS3rGJTZLkJBaSQCRI4mfAnjYTWSJN6fPiEyKgmF3TZ7RpM7LRsPjA4D9sAl0A7oSRCWigReLuOeWhXWFGs2SXS19YGoFKiSlHdkRBAXq3h5UgW8NZS3RyragrlpBEnwWnLxn2CYfaTrhS0koH9LK340iQpOw3uPME7TraC2gYpPgQVAqW2rxANp0kggTBPOdPnWWuqpOpBXLyAYWmLx7OHKVfWtRdUqdPdL7tThCrAmENiBPIkWtTk5k2QFJxLalL0JX42RATKgYixlRH+6N9qykCgqVxqK0leYstOONpxGouHvwvUypCVqWVLTr+7BSIHMzxpTFZigNPuDFN94UrIAWydSkyhACUjilINufnWZkUFCgq8v52LJTjWSJaNsKtF0LChNhsRJ5xQOZspJlGMacKloBhglUQhuYNyAlAMefOqOKcPtAAEUaoXTWFwJHJaphVlXiD5MgE+BsbEKHh7u253veKg+1qnfqSApLiUEjTqTAV3a1ISqdAkFOlQvxPmc+owoUThClUUE0KE7+RNFoXMr/2Q==' />
                        <div className='container1'>
                            <h1>Fifth Element</h1>
                            <p>
                            In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.
                            < br/>
                            <em className='devPick'>Picked by Rory</em>
                            </p>
                        </div>
                    </div>

                    {/*  Bren's Movie */} 
                    <div className='carousel-item '>
                        <img src='https://flxt.tmsimg.com/assets/p21702_p_v8_ae.jpg' />
                        <div className='container2'> 
                        <h1>Rush Hour</h1>
                        <p>
                        A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective.
                        < br/>
                        <em className='devPick'>Picked by Bren</em>
                        </p>
                        </div>
                    </div>
                </div>
                <a href='#theCarousel' className='carousel-control-prev' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                </a>
                <a href='#theCarousel' className='carousel-control-next' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                </a>
            </div>

                <h2>TRACK FILMS YOU'VE WATCHED.</h2>
                <h2>SAVE THOSE YOU WANT TO SEE.</h2>
                <h2>TELL YOUR FRIENDS WHATS GOOD.</h2>
            </div>
                {/* {media.map(data => {
                    <div>
                        <img src={data.poster_path} />
                        <h2>{data.title}</h2>
                        <h5>{data.overview}</h5>
                    </div>
                })} */}
        </div>
        
    );

}

export default Home