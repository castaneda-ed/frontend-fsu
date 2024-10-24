import api from "./api";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "/departments",
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Department"],
    }),
    getDepartment: build.query({
      query: (id) => `departments/${id}`,
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Department"],
    }),
    postDepartment: build.mutation({
      query: (newDepartment) => ({
        url: "/departments",
        method: "POST",
        body: newDepartment,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `/departments/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Department"],
    }),
    updateDepartment: build.mutation({
      query: (id, ...updatedDepartment) => ({
        url: `/departments/${id}`,
        method: "PATCH",
        body: updatedDepartment,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response,
      invalidatesTags: ["Department"],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  usePostDepartmentMutation,
  useDeleteDepartmentMutation,
  useUpdateDepartmentMutation,
} = departmentApi;
