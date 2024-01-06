import { useForm, Controller } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/ config/firebase";

export default function Home() {
  // const [q3Value, setQ3Value] = useState();
  // const [q4Value, setQ4Value] = useState();

  // const handleQ3OptionChange = (event) => {
  //   setQ3Value(event.target.value);
  //   console.log(q3Value);
  // };
  // const handleQ4OptionChange = (event) => {
  //   setQ4Value(event.target.value);
  //   console.log(q4Value);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const [isLearning, wasLearning] = watch(["isLearning", "wasLearning"]);

  const onSubmit = (date) => {
    console.log(date);
    addDoc(collection(db, "survey"), {
      text: date,
      timestamp: new Date(),
    });
  };

  const AddQestion = () => {
    return (
      <>
        <label htmlFor="language">
          Q5.今まで学習したことのあるプログラミング言語をすべて教えてください。
        </label>
        <Controller
          name="language"
          defaultValue=""
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChange={onChange} />
          )}
        />
      </>
    );
  };
  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1. 名前を入力してください（匿名可）。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
          </div>
          <div>
            <label htmlFor="birth">Q2. 8桁で生年月日を入力してください。</label>
            <Controller
              name="birth"
              rules={{ registed: true, pattern: /^[0-9]{8}$/ }}
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input value={value} onChange={onChange} />
              )}
            />
            {/* {errors.birth && errors.birth.type === "required" ? (
              <span>このフィールドは回答必須です。</span>
            ) : null} */}
          </div>
          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"
              {...register("isLearning", { required: true })}
              // onChange={handleQ3OptionChange}
              name="isLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="isLearning1">はい</label>
            <input
              id="isLearning2"
              {...register("isLearning", { required: true })}
              // onChange={handleQ3OptionChange}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning2">いいえ</label>
            <input
              id="isLearning3"
              {...register("isLearning", { required: true })}
              // onChange={handleQ3OptionChange}
              name="isLearning"
              type="radio"
              value="false"
            />

            <label htmlFor="isLearning3">分からない</label>
            {errors.isLearning && <span>このフィールドは回答必須です。</span>}
          </div>
          <div>
            <span>
              Q4. これまでに、プログラミングを学習したことがありますか？
            </span>
            <input
              id="wasLearning1"
              {...register("wasLearning", { required: true })}
              // onChange={handleQ4OptionChange}
              name="wasLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="wasLearning1">はい</label>
            <input
              id="wasLearning2"
              {...register("wasLearning", { required: true })}
              // onChange={handleQ4OptionChange}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning2">いいえ</label>
            <input
              id="wasLearning3"
              {...register("wasLearning", { required: true })}
              // onChange={handleQ4OptionChange}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning3">分からない</label>
            {errors.wasLearning && <span>このフィールドは回答必須です。</span>}
          </div>
          <div>
            {isLearning === "true" || wasLearning === "true" ? (
              <AddQestion />
            ) : null}
          </div>
          <div>
            <input type="submit" value="アンケートを提出する" />
          </div>
        </form>
      </Container>
    </>
  );
}
