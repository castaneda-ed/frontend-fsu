import api from "./api";

const facultyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFaculty: build.query({
      query: () => "/faculty",
      transformResponse: (response) => response.faculty,
      transformErrorResponse: (response) => response.faculty.error,
      providesTags: ["Faculty"],
    }),
    getProfessor: build.query({
      query: (id) => "/faculty/" + id,
      transformResponse: (response) => response.professor,
      transformErrorResponse: (response) => response.professor.error,
      providesTags: ["Faculty"],
    }),
    updateProfessor: build.mutation({
      query: (id, professor) => ({
        url: "/faculty/" + id,
        method: "PATCH",
        body: professor,
      }),
      transformResponse: (response) => response.professor,
      transformErrorResponse: (response) => response.error,
      invalidatesTags: ["Faculty"],
    }),
    addProfessor: build.mutation({
      query: (professor) => ({
        url: "/faculty",
        method: "POST",
        body: professor,
      }),
      transformResponse: (response) => response.professor,
      transformErrorResponse: (response) => response.professor.error,
      invalidatesTags: ["Faculty"],
    }),
    deleteProfessor: build.mutation({
      query: (id) => ({
        url: "/faculty" + id,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.error,
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
