<template>
  <div class="">
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Status</th>
            <th scope="col">Planos</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comp in companies">
            <td>{{ comp.id }}</td>
            <td>{{ comp.name }}</td>
            <td>{{ comp.status }}</td>
            <td>{{ comp.plan }}</td>
            <td>
              <button type="button" name="button"  @click="deleteCompany(comp.id)">
                <span style="color: red; font-weight: bold;">X</span>
              </button>
              <router-link :to="{name: 'edit-company', params:{id: comp.id}}" tag="button">
                <span style="color: yellow; font-weight: bold;">E</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script src="./list-company.js"></script>
