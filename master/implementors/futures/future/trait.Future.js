(function() {var implementors = {};
implementors["hyper"] = ["impl&lt;R, W&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/io/copy/struct.Copy.html' title='tokio_core::io::copy::Copy'>Copy</a>&lt;R, W&gt; <span class='where'>where R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl&lt;A&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/io/flush/struct.Flush.html' title='tokio_core::io::flush::Flush'>Flush</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl&lt;A, T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/io/read_exact/struct.ReadExact.html' title='tokio_core::io::read_exact::ReadExact'>ReadExact</a>&lt;A, T&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html' title='core::convert::AsMut'>AsMut</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl&lt;A&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/io/read_to_end/struct.ReadToEnd.html' title='tokio_core::io::read_to_end::ReadToEnd'>ReadToEnd</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a></span>","impl&lt;R, T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/io/read/struct.Read.html' title='tokio_core::io::read::Read'>Read</a>&lt;R, T&gt; <span class='where'>where R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html' title='core::convert::AsMut'>AsMut</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl&lt;A&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/io/read_until/struct.ReadUntil.html' title='tokio_core::io::read_until::ReadUntil'>ReadUntil</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html' title='std::io::BufRead'>BufRead</a></span>","impl&lt;A, T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/io/write_all/struct.WriteAll.html' title='tokio_core::io::write_all::WriteAll'>WriteAll</a>&lt;A, T&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStreamNew.html' title='tokio_core::net::tcp::TcpStreamNew'>TcpStreamNew</a>","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/net/udp/struct.SendDgram.html' title='tokio_core::net::udp::SendDgram'>SendDgram</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/net/udp/struct.RecvDgram.html' title='tokio_core::net::udp::RecvDgram'>RecvDgram</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html' title='core::convert::AsMut'>AsMut</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/reactor/timeout/struct.Timeout.html' title='tokio_core::reactor::timeout::Timeout'>Timeout</a>","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for Receiver&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for Waiting&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for Pipeline&lt;T&gt; <span class='where'>where T: Dispatch</span>","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for Multiplex&lt;T&gt; <span class='where'>where T: Dispatch</span>","impl&lt;T, E&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for Response&lt;T, E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>","impl&lt;Kind, P&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for Connect&lt;Kind, P&gt; <span class='where'>where P: BindClient&lt;Kind, <a class='struct' href='https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStream.html' title='tokio_core::net::tcp::TcpStream'>TcpStream</a>&gt;</span>","impl&lt;T, E&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for CpuFuture&lt;T, E&gt; <span class='where'>where E: 'static + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>, T: 'static + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='hyper/client/struct.FutureResponse.html' title='hyper::client::FutureResponse'>FutureResponse</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
