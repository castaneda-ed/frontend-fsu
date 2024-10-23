import api from "./api";

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "departments",
      transformResponse: (response) => response.departments,
      transformErrorResponse: (response) => response.departments.error,
      invalidatesTags: ["Department"],
    }),
    getDepartment: build.query({
      query: (id) => `departments/${id}`,
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      invalidatesTags: ["Department"],
    }),
    postDepartment: build.mutation({
      query: (newDepartment) => ({
        url: "departments",
        method: "POST",
        body: newDepartment,
      }),
      transformResponse: (response) => response.department,
      transformErrorResponse: (response) => response.error,
      invalidatesTags: ["Department"],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `departments/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => response.message,
      transformErrorResponse: (response) => response.error,
      invalidatesTags: ["Department"],
    }),
    updateDepartment: build.mutation({
      query: (id, ...updatedDepartment) => ({
        url: `departments/${id}`,
        method: "PATCH",
        body: updatedDepartment,
      }),
      transformResponse: (response) => response.updateDepartment,
      transformErrorResponse: (response) => response.error,
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
