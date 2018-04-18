import ZipCode from './zipCode.json'

const zipToCityDistrict = (zip) => {
  const obj = {
    city: '',
    district: ''
  }
  Object.keys(ZipCode).forEach((city) => {
    const districtList = Object.keys(ZipCode[city])

    const district = districtList.filter((dist) => {
      return ZipCode[city][dist] === zip
    })

    if (district.length > 0){
      obj.city = city
      obj.district = district[0]
    }
  })
  return obj
}

class Zip {
  constructor(zip) {
    if (zip){
      this.zip = zip
      this.city = zipToCityDistrict(zip).city
      this.district = zipToCityDistrict(zip).district
    } else {
      this.zip = '100'
      this.city = '台北市'
      this.district = '中正區'
    }
  }

  getAllCity(){
    return Object.keys(ZipCode)
  }

  getAllDistrict(){
    const districtList = Object.keys(ZipCode[this.city])
    const district = districtList.filter((dist) => {
      return dist === this.district
    })
    if (district.length === 0){
      this.district = districtList[0]
    }

    this.zip = this.CityDistrictToZip()
    return districtList
  }

  CityDistrictToZip(){
    return ZipCode[this.city][this.district]
  }
}

export default Zip
