import api from "./api";

const facultyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFaculty: build.query({
      query: () => "/faculty",
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      providesTags: ["Faculty"],
    }),
    getProfessor: build.query({
      query: (id) => "/faculty/" + id,
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      providesTags: ["Faculty"],
    }),
    updateProfessor: build.mutation({
      query: (id, professor) => ({
        url: "/faculty/" + id,
        method: "PATCH",
        body: professor,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Faculty"],
    }),
    addProfessor: build.mutation({
      query: (professor) => ({
        url: "/faculty",
        method: "POST",
        body: professor,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Faculty"],
    }),
    deleteProfessor: build.mutation({
      query: (id) => ({
        url: "/faculty" + id,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Faculty"],
    }),
  }),
});

export const {
  useGetFacultyQuery,
  useGetProfessorQuery,
  useAddProfessorMutation,
  useUpdateProfessorMutation,
  useDeleteProfessorMutation,
} = facultyApi;
