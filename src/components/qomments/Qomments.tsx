"use client";

import { FC, useRef } from "react";
import Spinner from "../debug/Spinner";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  deleteQomment,
  getQomments,
  NewQommentType,
  postQomment,
  QommentType
} from "@/services/qomments";
import Qomment from "./Qomment";
import QommentForm from "./QommentForm";

type Props = {
  quarticleId: string;
};

type QommentsViewProps = {
  quarticleId: string;
};

const QommentsView: FC<QommentsViewProps> = ({ quarticleId }) => {
  const client = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryFn: () => {
      return getQomments(quarticleId);
    },
    queryKey: ["qomments", quarticleId]
  });

  const postQommentMutation = useMutation({
    mutationFn: async (qomment: NewQommentType) => {
      return postQomment(quarticleId, qomment);
    },
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["qomments", quarticleId]
      });
    }
  });

  const deleteQommentMutation = useMutation({
    mutationFn: async (qomment: QommentType) => {
      return deleteQomment(quarticleId, qomment.id);
    },
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["qomments", quarticleId]
      });
    }
  });

  return (
    <section>
      <QommentForm postQomment={postQommentMutation.mutate} />
      {isLoading && <Spinner />}
      {data?.map((qomment) => {
        return (
          <Qomment
            key={qomment.id}
            qomment={qomment}
            deleteQomment={deleteQommentMutation.mutate}
            isDeleting={deleteQommentMutation.variables?.id === qomment.id}
          />
        );
      })}
      ;
    </section>
  );
};

const Qomments: FC<Props> = ({ quarticleId }) => {
  const ref = useRef(new QueryClient());

  return (
    <QueryClientProvider client={ref.current}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      <section>
        <h3>Comments for {quarticleId}</h3>

        <QommentsView quarticleId={quarticleId} />
      </section>
    </QueryClientProvider>
  );
};

export default Qomments;
