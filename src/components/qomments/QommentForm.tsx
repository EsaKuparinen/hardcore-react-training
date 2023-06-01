import {
  NewQommentType,
  qommentSchema,
  QommentType
} from "@/services/qomments";
import { FC } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  postQomment: (qomment: NewQommentType) => void;
};

/*
      <button
        onClick={async () => {
          const newQomment = {
            email: "test@email.com",
            comment: "testing testintinsetinetesin"
          };

          postQommentMutation.mutate(newQomment);
        }}
      >
        postaa kommentti
      </button>
*/

const QommentForm: FC<Props> = ({ postQomment }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<NewQommentType>({
    mode: "onChange",
    resolver: zodResolver(qommentSchema),
    defaultValues: {
      email: "",
      comment: ""
    }
  });

  return (
    <form
      onSubmit={handleSubmit((values, e) => {
        e?.preventDefault();
        postQomment(values);
        reset();
      })}
    >
      <div>
        <label htmlFor="email">email</label>
        <input {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="comment">comment</label>
        <input {...register("comment")} />
        {errors.comment && <span>{errors.comment.message}</span>}
      </div>
      <div>
        <button disabled={!isValid} type="submit">
          postaa kommentti
        </button>
      </div>
    </form>
  );
};

export default QommentForm;
