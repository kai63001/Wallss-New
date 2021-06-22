import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const InputCategory = dynamic(import("@/components/core/InputCategory"));
import { isAuth } from "@/lib/auth";
import axios from "@/lib/axios";

const UploadPage = (props) => {
  const router = useRouter();

  const [hasAuthor, setHasAuthor] = useState(false);
  const [loading, setLoading] = useState(false);

  //! input body
  const [title, setTitle] = useState("");
  const [listCategory, setListCategory] = useState([]);
  const [type, setType] = useState(0);
  const [listTags, setListTags] = useState([]);
  const [image, setImage] = useState("");
  const [resolution, setResolution] = useState("");
  const [author, setAnthor] = useState("");
  const [authorLink, setAnthorLink] = useState("");

  const [errors, setErrors] = useState({});

  const onChangeInputError = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const checkTypeImage = (type: string) => {
    const support = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
    if (support.includes(type)) return true;
    return false;
  };
  const uploadImage = (e) => {
    setErrors({
      ...errors,
      upload: "",
    });
    console.log("upload");
    const files = e.target.files || e.dataTransfer.files;
    console.log(files);
    const readAndPreview = (file) => {
      console.log("readANdPrv");
      const reader = new FileReader();
      reader.onload = (e) => {
        let imagerr: any = new Image();
        imagerr.src = e.target.result;
        imagerr.onload = function () {
          // console.log(e.target.result)
          setImage(e.target.result.toString());
          setResolution(`${this.width}X${this.height}`);
          // console.log('image : ',image)
          // setImage((image) => [
          //   ...image,
          //   {
          //     base64: e.target.result,
          //     name: "",
          //     tags: "",
          //     categoly: "",
          //     author: "",
          //     resolution: `${this.width}X${this.height}`,
          //   },
          // ]);
        };
      };
      reader.readAsDataURL(file);
    };
    if (files) {
      for (let i = 0; i < files.length; i++) {
        console.log("size Image:", files[i].size);
        if (files[i].size > 10000000) {
          setErrors({
            ...errors,
            upload: "Error: size limit 10mb",
          });
          // setErrorFile(true);
          // setErrorText('Error: size limit 10mb');
        } else if (checkTypeImage(files[i].type)) {
          readAndPreview(files[i]);
        } else {
          setErrors({
            ...errors,
            upload: "Error: file type support only png,jpg and gif",
          });
          console.log("😞 error file");
        }
      }
    }
  };

  const deleteImage = () => {
    setImage("");
  };

  const validate = (): boolean => {
    let valid = true;
    let error = {};
    console.log(title.length);
    if (title.length == 0) {
      error["title"] = "Error: Title required";
      valid = false;
    }
    console.log(errors);
    if (!image) {
      error["upload"] = "Error: Image required";
      valid = false;
    }
    if (listCategory.length == 0) {
      console.log("error categiry");
      error["category"] = "Error: Category required";
      valid = false;
    }
    setErrors(error);
    return valid;
  };

  const submit = async () => {
    setLoading(true);
    if (!validate()) {
      setLoading(false);
      return;
    }
    const body = {
      title: title,
      image: image,
      author: author,
      authorLink: authorLink,
      type: type,
      categories: listCategory,
      tags: listTags,
      resolution: resolution,
    };
    console.log(body);
    console.log("gogogo");
    const data = await axios.post(`${process.env.HOST}/upload`, body);
    console.log(await data.data);
    router.push("/");
  };

  // console.log(props.romeo)

  const dev = true;
  if (dev)
    return (
      <Layout
        title="Upload - Wallss download wallpapers 4k"
        des="Upload to wallpaper community share the things you create, or share the things you love. download wallpaper 4k hd"
      >
        <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
          <div className="text-center"><h1>UPLOAD WALLPAPER SOON..</h1></div>
        </div>
      </Layout>
    );
  return (
    <Layout
      title="Upload - Wallss download wallpapers 4k"
      des="Upload to wallpaper community share the things you create, or share the things you love. download wallpaper 4k hd"
    >
      <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
        <div className="">
          <div className="bg-purple-500 px-5 py-2 text-white">Wall Title</div>
          <div className="bg-white p-5">
            <input
              name="title"
              value={title}
              onChange={(e) => {
                onChangeInputError(e);
                setTitle(e.target.value);
              }}
              type="text"
              className={` focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border ${
                errors["title"]
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              } py-1 pl-3`}
              placeholder="What is your wall called"
            />
            {errors["title"] && (
              <span className="block text-red-500 text-sm">
                {errors["title"]}
              </span>
            )}
          </div>
        </div>
        <div className="border-dashed border-4 border-purple-300 mt-4 p-3">
          <div className="flex flex-row mb-2 space-x-4">
            <div
              onClick={() => setType(0)}
              className={`w-32 h-32 ${
                type == 0 ? "bg-purple-700 text-white" : "bg-white text-black"
              }  flex items-center justify-center flex-col cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  type == 0 ? "text-white" : "text-purple-700"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>Desktop</div>
              <div className="text-sm text-gray-400 -mt-1">JPG,PNG,GIF</div>
            </div>
            <div
              onClick={() => setType(1)}
              className={`w-32 h-32 ${
                type == 1 ? "bg-purple-700 text-white" : "bg-white text-black"
              } flex items-center justify-center flex-col cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  type == 1 ? "text-white" : "text-purple-700"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div>Mobile</div>
              <div className="text-sm text-gray-400 -mt-1">JPG,PNG,GIF</div>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-center h-96">
            {image ? (
              <div className="h-full w-full flex items-center justify-center relative mt-1">
                <img src={image} className="block h-full" height="100%" />
                <div className="absolute top-1 right-1">
                  <button
                    onClick={deleteImage}
                    className="focus:outline-none focus:ring-0 focus:border-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="imgUpload"
                  className="cursor-pointer select-none flex justify-start bg-purple-700 text-white px-6 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <span>Upload</span>
                  <input
                    onChange={uploadImage}
                    type="file"
                    id="imgUpload"
                    className="hidden"
                  />
                </label>

                {errors["upload"] && (
                  <span className="block text-center text-red-500 text-sm">
                    {errors["upload"]}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="my-5">
          <div className="bg-purple-500 px-5 py-2 text-white">Wall Details</div>
          <div className="bg-white p-5">
            <div className="">
              <span className="text-lg">Author</span>
              <label className="block cursor-pointer select-none text-gray-700">
                <input
                  onClick={() => setHasAuthor(!hasAuthor)}
                  type="checkbox"
                  name="author"
                  className="mr-2 form-checkbox border-purple-700 text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  id="author"
                />
                Has an author
              </label>
              {hasAuthor && (
                <div className="grid grid-cols-3 gap-2">
                  <input
                    onChange={(e) => setAnthor(e.target.value)}
                    type="text"
                    className={` mt-1 focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border-gray-200 focus:border-purple-500 focus:ring-purple-500 py-1 pl-3`}
                    placeholder="Author Name"
                  />
                  <input
                    onChange={(e) => setAnthorLink(e.target.value)}
                    type="url"
                    className={` mt-1 focus:ring-1 col-span-2 focus:outline-none w-full text-black placeholder-gray-500 border-gray-200 focus:border-purple-500 focus:ring-purple-500 py-1 pl-3`}
                    placeholder="Author Link"
                  />
                </div>
              )}
            </div>
            <div className="mt-2">
              <span className="text-lg">Category</span>
              <div className="text-sm text-gray-600 -mt-2">
                What walls category
              </div>
              <InputCategory
                list={listCategory}
                setList={setListCategory}
                placeholder="E.g.Anime Gundam (Enter to add)"
              />
              {errors["category"] && (
                <span className="block text-red-500 text-sm">
                  {errors["category"]}
                </span>
              )}
            </div>
            <div className="mt-2">
              <span className="text-lg">Tags</span>
              <div className="text-sm text-gray-600 -mt-2">
                Use tags to add more detailed
              </div>
              <InputCategory
                type="tags"
                list={listTags}
                setList={setListTags}
                placeholder="E.g.Space Wing Star Flighter (Enter to add)"
              />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button
            disabled={loading}
            onClick={submit}
            className="bg-purple-600 text-white px-6 py-2 flex items-center focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            {!loading ? (
              <svg
                id="bold"
                fill="currentColor"
                className="text-white h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m23.508.003c-4.685-.084-10.028 2.365-13.41 6.164-3.232.061-6.379 1.386-8.696 3.703-.135.133-.183.332-.124.512.06.181.216.312.404.339l3.854.552-.476.533c-.177.198-.168.499.02.687l6.427 6.427c.097.097.225.146.354.146.119 0 .238-.042.333-.127l.533-.476.552 3.854c.027.188.175.326.354.386.046.015.094.022.143.022.142 0 .287-.062.387-.161 2.285-2.285 3.61-5.432 3.671-8.664 3.803-3.389 6.272-8.73 6.163-13.409-.007-.266-.222-.481-.489-.488zm-4.608 8.632c-.487.487-1.127.731-1.768.731s-1.281-.244-1.768-.731c-.974-.975-.974-2.561 0-3.536.975-.975 2.561-.975 3.536 0s.975 2.562 0 3.536z" />
                <path d="m2.724 16.905c-1.07 1.07-2.539 5.904-2.703 6.451-.053.176-.004.367.125.497.096.096.223.147.354.147.048 0 .096-.007.144-.021.547-.164 5.381-1.633 6.451-2.703 1.205-1.205 1.205-3.166 0-4.371-1.206-1.205-3.166-1.204-4.371 0z" />
              </svg>
            ) : (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Publish
          </button>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ req, res }) {
  const cookie = req ? req.headers.cookie : undefined;
  if (cookie == undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  //cookie parse
  const token = cookie.replace(
    /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (!isAuth(token)) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  return {
    props: {
      token,
      // romeo: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
    }, // will be passed to the page component as props
  };
}

export default UploadPage;
